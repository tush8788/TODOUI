import { Form, Checkbox, Radio, Input, Select, TreeSelect, Cascader, DatePicker, InputNumber, Switch, Upload, Button, Slider, ColorPicker, Rate, message } from "antd"
import TextArea from "antd/es/input/TextArea"
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { createTask } from "../../../services/TaskService";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { updateTask } from "../../../store/slice/taskSlice";
import { cloneDeep } from "lodash";


const CreateTask = () => {
    const dispatch = useAppDispatch();
    const { task, status } = useAppSelector((state) => state.tasks)
    const [messageApi, contextHolder] = message.useMessage();


    const onSubmit = async (values: any) => {
        try {
            const file = values.file?.[0]?.originFileObj; // Extract file from form data
            if (!file) {
                message.error("Please upload a file!");
                return;
            }
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("desc", values.desc);
            formData.append("file", file);

            let resp: any = await createTask(formData)
            // let resp: any = await createTask({ name: values.name, desc: values.desc, url: '' })
            console.log("task ", resp)
            let cloneTasks = cloneDeep(task)
            cloneTasks.push(resp.data);
            dispatch(updateTask(cloneTasks))
            messageApi.open({
                type: 'success',
                content: 'New Task Added',
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {contextHolder}
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                onFinish={onSubmit}
                initialValues={{
                    name: '',
                    desc: '',
                    file: null
                }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
            >
                <Form.Item
                    rules={[{ required: true, message: "This field is required" }]}
                    name={'name'} label="Input">
                    <Input />
                </Form.Item>
                <Form.Item
                    rules={[{ required: true, message: "This field is required" }]}
                    label="TextArea" name={'desc'}>
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    rules={[{ required: true, message: "This field is required" }]}
                    required label="Upload File" name="file" valuePropName="fileList" getValueFromEvent={(e) => e?.fileList}>
                    <Upload beforeUpload={() => false} maxCount={1} listType="text">
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Add Task
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default CreateTask