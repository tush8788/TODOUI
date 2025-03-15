import { Button, Form, FormProps, Input } from 'antd';
import { signInApi } from '../../services/AuthService';
import useAuth from '../../utils/hooks/useAuth';

type FieldType = {
    email: string,
    password: string
}

const Signin = () => {
    const {signIn} = useAuth()

    const onSubmit: FormProps<FieldType>['onFinish'] = async (values:FieldType) => {
        try{
            console.log('Success:', values);
            let resp:any = await signInApi(values)
            console.log("resp ",resp)
            if(resp.data)
            {
                signIn(resp.data)
            }

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
                initialValues={{ email: '', password: '' }}
                onFinish={onSubmit}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
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
                        Signin
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default Signin