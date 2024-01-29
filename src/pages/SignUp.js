import React from 'react'
import {Input  , Button , Form} from "antd";
import '../css/signIn.css'

function SignUp (){
  return (
    <div>
      <div className='main'>
        <div className='left'>
        <h2>Sign up for your account</h2>
          <div className='input-field' id='inp'>

            <Form
              name="signUp"
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              // autoComplete="off"
            >

            <Form.Item
                name="name"
                rules={[
                {
                    type:'text',
                    required: true,
                    message: 'Please input a valid name',
                },
                ]}
            >  
                <div>
                    <Input id='fname'  placeholder="First Name" required/>
                    
                    <Input id='lname' placeholder='Last Name' required/>
                </div>

            </Form.Item>

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
                    <Input.Password  id='pass' placeholder='Password'/>
                </Form.Item>

                <Form.Item
                    name="password2"
                    dependencies={['password']}
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password id='pass2' placeholder='Confirm Password'/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                    Sign up
                    </Button>
        
                    <p className='message'>Already have an Account? <span><a href="www.google.com">Sign up</a></span></p>
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

export default SignUp;
