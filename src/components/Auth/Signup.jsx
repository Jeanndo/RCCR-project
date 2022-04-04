import { Form, Input, Button, Checkbox } from 'antd';
import { useState, useContext} from 'react';
import { useHistory } from "react-router-dom"
import Toorbar from "../Navigation/Toolbar/Toolbar";
import { useHttpClient } from "../../shared/hooks/http-hook"
import { AuthContext } from "../../shared/context/auth-context"
import {Link} from "react-router-dom"

const Signup =  () => {
  const auth = useContext(AuthContext)
  const history = useHistory()
  const [firstName, setFirstName] =useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { isLoading, sendRequest } = useHttpClient()
  const [lastName, setLastName] =useState("")
  const [email, setEmail] =useState("")
  const [phone, setPhone] =useState("")
  const [password, setPassword] =useState("")

  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      const responseData = await sendRequest(
        "http://localhost:4042/api/v1/signup",
        "POST",
        JSON.stringify(values),
        { "Content-Type": "application/json" }
      )
      if (responseData.error) {
        alert(responseData.error)
      } else {
        console.log(responseData)
        auth.login(
          responseData.id,
          responseData.fullName,
          responseData.email,
          responseData.token
        )
        sessionStorage.setItem('rccRwUser',JSON.stringify(responseData))
        history.push("/")
      }
    } catch (error) {}

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    
  };
console.log("Firstname",firstName)
  return (
    <div>
    <Toorbar/>
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
        label="FirstName"
        name="firstName" 
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="LastName"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}/>
      </Form.Item>
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
        <Input
         value={email}
         onChange={(e) => setEmail(e.target.value)}/>
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone!',
          },
        ]}
      >
        <Input
         value={phone}
         onChange={(e) => setPhone(e.target.value)}/>
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
        label="Comfirm Password"
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
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
          Sign Up
        </Button>
        &nbsp;
        <Link to="/login">Already have account? Login</Link>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Signup