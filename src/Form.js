import React from 'react';
import { Form, Icon, Input, Button, DatePicker } from 'antd';
import moment from 'moment';

class UserForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const { date, firstname, lastname, hobby, age } = values;
      if (!err) {
        // console.log('Received values of form: ', moment(date).format('YYYY-MM-DD'));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <Form onSubmit={this.handleSubmit} className="user-form">
        <Form.Item>
          {getFieldDecorator('firstname', {
            rules: [{ required: true, message: 'Please input your Firstname!' }],
          })(
            <Input
              suffix={<Icon type="user" className="icon" />}
              placeholder="Firstname"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('lastname', {
            rules: [{ required: true, message: 'Please input your Lastname!' }],
          })(
            <Input
              suffix={<Icon type="user" className="icon" />}
              placeholder="Lastname"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('date', {
            rules: [{ required: true, message: 'Please select a valid date!' }],
          })(
            <DatePicker
              className="date-picker"
              placeholder="Birthday"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please input your Age!' }],
          })(
            <Input
              suffix={<Icon type="number" className="icon" />}
              placeholder="Age"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('hobby', {
            rules: [{ required: true, message: 'Please input your Hobbies!' }],
          })(
            <Input
              suffix={<Icon type="like" className="icon" />}
              placeholder="Hobbies"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="user-form-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const FormPage = Form.create()(UserForm);

export default FormPage;
