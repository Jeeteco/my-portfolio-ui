import React, { useContext, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import  { GlobalContext } from '../../context/GlobalProvider';
import { UserOutlined, LockOutlined,  } from '@ant-design/icons';
import { Input, Flex, Checkbox, Button, Alert, Form } from 'antd';
import axios from 'axios';

import PageLayouts from '../../component/layouts/PageLayouts';

const LoginContainer = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setAuthTokenHandler } = useContext(GlobalContext);
  const onFinish = async (values: any) => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login',
        {
          username: values.username
          ,
          Password: values.password,
        });
      const { accessToken } = response.data;
      setAuthTokenHandler(accessToken);
      navigate('/deatilboard');
    }
    catch (err: any) {
      setError('Invalid crendentials');
    }
  };

  return (
    <div className='auth-container'  style={{ scrollPaddingBlockEnd:120 }}>
    
     <h1>Login</h1>
      {error && <Alert message={error} type="error" showIcon />}
      
      <Form
        name="login"
       
        initialValues={{ remember: true }}
        style={{ maxWidth: 560 }}
        onFinish={onFinish}
        
        scrollToFirstError
       
       

      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>

        </Form.Item>
      </Form>
  
    </div>
  )
}

export default LoginContainer