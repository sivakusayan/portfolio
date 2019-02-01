import React, { Component } from 'react';
import validator from 'email-validator';

import InputField from './InputField';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    emailIsValid: true,
    emailIsFocused: false,
  }

  // Make sure property is a string corresponding
  // with the state field you want to change
  // Ex: To change state.name, set property to 'name'
  onChangeWrapper = (property) => (e) => {
    const value = e.target.value;
    const stateObject = {};
    stateObject[property] = value;
    this.setState(stateObject);

    if (property === 'email') {
      this.validateEmail(value);
    }
  }

  validateEmail = (value) => {
    this.setState({
      emailIsValid: validator.validate(value)
    })
  }

  setEmailInvalid = () => {

  }

  render() {
    const { name, email, message, emailIsValid } = this.state;
    return (
      <section className='section section--contact-form'>
        <div className='section__text'>
          <h3 className='section__title'>Get in Touch</h3>
        </div>
        <form className='form'>
          <InputField
            label='Name'
            type='text'
            value={name}
            onChange={this.onChangeWrapper('name')}
          />
          <InputField
            label='Email'
            type='email'
            value={email}
            onChange={this.onChangeWrapper('email')}
            // We will use our own validation function
            noValidate
          />
          <InputField
            label='Message'
            type='textarea'
            value={message}
            onChange={this.onChangeWrapper('message')}
          />
          <button type='submit'>Send Message</button>
        </form>
      </section>
    );
  }
}

export default ContactForm;
