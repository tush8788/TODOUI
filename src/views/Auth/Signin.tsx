import { Button, Form, FormProps, Input } from 'antd';
import { signInApi } from '../../services/AuthService';
import useAuth from '../../utils/hooks/useAuth';
import GoogleAuth from './GoogleAuth';

type FieldType = {
    email: string,
    password: string
}

const Signin = () => {
    const { signIn } = useAuth()

    const onSubmit: FormProps<FieldType>['onFinish'] = async (values: FieldType) => {
        try {
            let resp: any = await signInApi(values)
            if (resp.data) {
                signIn(resp.data)
            }

        } catch (err) {
            console.log("err", err)
        }
    };

    return (
        <div className="mt-5 justify-center items-center flex h-full w-full">
            <div className='p-5 w-[60vw] lg:w-[30vw] shadow-2xl rounded-xl'>
                <div className='flex justify-center mb-3 text-xl'>SignIN</div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    initialValues={{ email: '', password: '' }}
                    onFinish={onSubmit}
                    autoComplete="off"
                    className='flex flex-col justify-center'
                >
                    <Form.Item<FieldType>
                        // label="Email"
                        className="!w-full"
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Enter Email' className='!w-full' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        className=""
                        // label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='Enter Password' />
                    </Form.Item>

                    {/* <Form.Item label={null} className=''> */}
                    <Button type="primary" htmlType="submit">
                        Signin
                    </Button>
                    {/* </Form.Item> */}
                </Form>
                <br />
                <hr />
                <br />
                <div className='flex justify-center'>
                    <GoogleAuth />
                    {/* <Button>Continue with Google</Button> */}
                </div>

            </div>

        </div>
    )
}

export default Signin