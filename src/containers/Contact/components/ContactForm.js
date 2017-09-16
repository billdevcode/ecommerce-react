import React, { Component } from 'react';
import Field from './Field';
import Button from './Button';
import TextArea from './TextArea';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.updateField = this.updateField.bind(this);
  }

  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div className="contact-form row">
        <div className="col s12 m8 offset-m2">
          {/* Name field */}
          <Field
            label="Name"
            placeholder="Name"
            onChange={(event) => this.updateField('name', event.target.value)}
            value={this.state.name}
          />

          {/* Email field */}
          <Field
            label="Email"
            placeholder="Email"
            onChange={(event) => this.updateField('email', event.target.value)}
            value={this.state.email}
          />

          {/* Message textarea */}
          <TextArea
            label="Message"
            placeholder="Message"
            onChange={(event) => this.updateField('message', event.target.value)}
            value={this.state.message}
            textarea={true}
          />

          {/* Submit button */}
          <Button
            email="sandra.adamshallie@gmail.com"
            formValues={this.state}
          />
        </div>
      </div>
    );
  }
}

export default ContactForm;
