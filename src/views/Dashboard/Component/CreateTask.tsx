import { Form, Checkbox, Radio, Input, Select, TreeSelect, Cascader, DatePicker, InputNumber, Switch, Upload, Button, Slider, ColorPicker, Rate, message, Modal } from "antd"
import TextArea from "antd/es/input/TextArea"
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { createTask } from "../../../services/TaskService";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { updateTask } from "../../../store/slice/taskSlice";
import { cloneDeep, values } from "lodash";
import { useState } from "react";


const CreateTask = () => {
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { task, status } = useAppSelector((state) => state.tasks)
    const [messageApi, contextHolder] = message.useMessage();
    const [isLoading,setIsLoading] = useState(false)
    const [form] = Form.useForm();


    const onSubmit = async (values: any,resetFields:any) => {
        try {
            setIsLoading(true)
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
            setIsModalOpen(false)
            setIsLoading(false)
            resetFields()
        }
        catch (err) {
            console.log(err);
            setIsLoading(false)

        }
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <Button type="primary" onClick={showModal}>
                Add Task
            </Button>
            <Modal title="Add Task" open={isModalOpen} footer onOk={handleOk} onCancel={handleCancel}>
                <div className="w-full">
                    <Form
                        form={form}
                        // labelCol={{ span: 4 }}
                        // wrapperCol={{ span: 14 }}
                        onFinish={(values)=>onSubmit(values,form.resetFields)}
                        initialValues={{
                            name: '',
                            desc: '',
                            file: null
                        }}
                        layout="horizontal"
                        style={{ maxWidth: 600 }}
                    >
                        <Form.Item
                            className="!w-full"
                            rules={[{ required: true, message: "This field is required" }]}
                            name={'name'}
                        // label="Input"
                        >
                            <Input placeholder="Task name" />
                        </Form.Item>
                        <Form.Item
                            rules={[{ required: true, message: "This field is required" }]}
                            // label="TextArea" 
                            name={'desc'}
                        >
                            <TextArea rows={4} placeholder="Enter discription" />
                        </Form.Item>

                        <Form.Item
                            rules={[{ required: true, message: "This field is required" }]}
                            required
                            // label="Upload File" 
                            name="file"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => e?.fileList}>
                            <Upload beforeUpload={() => false} maxCount={1} listType="text">
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                        </Form.Item>

                        <div className="w-full flex justify-center">
                            <Button loading={isLoading} type="primary" htmlType="submit">
                                Add Task
                            </Button>
                        </div>
                        {/* <Form.Item label={null}> */}

                        {/* </Form.Item> */}
                    </Form>
                </div>
            </Modal>

            {contextHolder}

        </>
    )
}

export default CreateTask