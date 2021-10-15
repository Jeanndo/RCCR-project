import { Form, Input, Button} from 'antd';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Login = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
    <Navigation/>
    <Form
     style={{margin:'40px 350px 0px 350px',backgroundColor:'#ccc',padding:'25px 0px 20px 0px',borderRadius:'5px'}}
      name="basic"
      labelCol={{
        span: 8,
      }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      wrapperCol={{
        span:8,
      }}                                                                                
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
     
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button style={{backgroundColor:"#B60000",color:'#fff'}} htmlType="submit"
        // loading={true}
        >
          Login
        </Button>
        <Link to="signup">Don't have accout? Signup</Link>
      </Form.Item>
      
    </Form>
    </div>
  );
};

export default Login;