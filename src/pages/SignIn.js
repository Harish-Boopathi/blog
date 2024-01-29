import React from 'react'
import {Input , Checkbox , Button , Form} from "antd";
import '../css/signIn.css'

function SignIn (){
  return (
    <div>
      <div className='main'>
        <div className='left'>
          <div className='input-field'>

            <Form
              name="signIn"
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              // autoComplete="off"
            >

              <h2>Sign in to your account</h2>

              <Form.Item
                name="email"
                rules={[
                  {
                    type:'email',
                    required: true,
                    message: 'Please input a valid Email',
                  },
                ]}
              >
                <Input placeholder='Email'/>
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password id='pass' placeholder='Password'/>
              </Form.Item>


              
              <Form.Item
                id='box'
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 0,
                  span: 40,
                }}
              >
                <div id='check'>
                    <span><Checkbox>Save Password</Checkbox></span>
                    <a id='forgot' href="www.google.com">Forgot Password?</a>
                </div>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Sign in
                </Button>
    
                <p className='message'>Don't have an Account? <span><a href="www.google.com">Sign up</a></span></p>
              </Form.Item>
              
            </Form>
          </div>
        </div>
            <div className='right'>
                <div></div>
            </div>
      </div>
    </div>
  )
}

export default SignIn;
