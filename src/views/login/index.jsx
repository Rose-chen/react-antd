import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return (
      <div className="login-wrapper">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item label="" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input placeholder="请输入用户名" className="login-input" />
          </Form.Item>

          <Form.Item label="" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password placeholder="请输入密码" className="login-input" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-btn">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
