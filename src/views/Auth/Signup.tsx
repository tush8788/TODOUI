import { Button, Form, FormProps, Input } from 'antd';
import { signUpApi } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

type FieldType = {
    name: string
    email: string,
    password: string
}

const Signup = () => {
    const navigate = useNavigate()
    const onSubmit: FormProps<FieldType>['onFinish'] = async (values: FieldType) => {
        try {
            await signUpApi(values)
            navigate('/signin')
        } catch (err) {
            console.log("err", err)
        }
    };

    return (
        <div className="mt-5 justify-center items-center flex h-full w-full">
            <div className='p-6 w-[60vw] lg:w-[30vw] shadow-2xl rounded-xl'>
                <div className='flex justify-center mb-3 text-xl'>SignUP</div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    className='w-full'
                    // wrapperCol={{ span: 16 }}
                    // style={{ maxWidth: 600 }}
                    initialValues={{ name: '', email: '', password: '' }}
                    onFinish={onSubmit}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        // label="Name"
                        name="name"
                        rules={[{ required: true, type: 'string', message: 'Please input your name!' }]}
                    >
                        <Input placeholder='Enter name'/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        // label="Email"
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Enter email' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        // label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='Enter password'/>
                    </Form.Item>

                    <div className='bg-red-100'>
                        <Button type="primary" className='w-full' htmlType="submit">
                            Signup
                        </Button>
                    </div>
                </Form>
                <br/>
                <hr />
                <br/>
                <div className='flex justify-center'>
                    <GoogleAuth/>
                    {/* <Button>Continue with Google</Button> */}
                </div>
            </div>
        </div>
    )
}

export default Signup