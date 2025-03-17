import { Form, Checkbox, Radio, Input, Select, TreeSelect, Cascader, DatePicker, InputNumber, Switch, Upload, Button, Slider, ColorPicker, Rate, message } from "antd"
import TextArea from "antd/es/input/TextArea"
import { PlusOutlined } from '@ant-design/icons';
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
            console.log("val ", values)
            let resp: any = await createTask({ name: values.name, desc: values.desc, url: '' })
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

    const normFile = (e: any) => {
        console.log(e)

        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };


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
                    url: ''
                }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
            >
                <Form.Item name={'name'} label="Input">
                    <Input />
                </Form.Item>
                <Form.Item label="TextArea" name={'desc'}>
                    <TextArea rows={4} />
                </Form.Item>
                {/* <Form.Item label="Upload" name={'url'} valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload 
                    maxCount={1}
                    beforeUpload={(file) => {
                        console.log(file)
                    }}
                    listType="picture-card"
                >
                    <button
                        style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
                        type="button"
                    >
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </button>
                </Upload>
            </Form.Item> */}
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