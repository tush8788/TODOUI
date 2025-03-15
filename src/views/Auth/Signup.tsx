import { Button, Form, FormProps, Input } from 'antd';
import { signUpApi } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

type FieldType = {
    name:string
    email: string,
    password: string
}

const Signup = () => {
    const navigate = useNavigate()
    const onSubmit: FormProps<FieldType>['onFinish'] = async (values:FieldType) => {
        try{
            console.log('Success:', values);
            let resp:any = await signUpApi(values)
            console.log("resp ",resp)
            navigate('/signin')
        }catch(err){
            console.log("err",err)
        }
    };

    return (
        <div className="bg-red-200">
            Signin
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ name:'',email: '', password: '' }}
                onFinish={onSubmit}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Name"
                    name="name"
                    rules={[{ required: true, type: 'string', message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Signup
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default Signup