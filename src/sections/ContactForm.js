import React, { Component } from 'react';
import validator from 'email-validator';

import InputField from '../components/InputField';
import emailIcon from '../assets/svg/email.svg';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    emailIsValid: true
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

  onSubmit = (e) => {
    const isValid = this.state.emailIsValid;

    if (!isValid) return e.preventDefault();
  }

  render() {
    const { name, email, message, emailIsValid } = this.state;
    return (
      <section className='section' id='contact'>
        <div className='section__text'>
          <h3 className='section__title'>Get in Touch</h3>
        </div>
        <form 
          name='contact'
          method='POST'
          data-netlify='true'
          className='form'
          onSubmit={this.onSubmit}
        >
          <InputField
            label='Name'
            type='text'
            value={name}
            onChange={this.onChangeWrapper('name')}
          />
          <InputField
            label='Email'
            type='text'
            value={email}
            onChange={this.onChangeWrapper('email')}
            invalid={!emailIsValid}
          />
          <InputField
            label='Message'
            type='textarea'
            value={message}
            onChange={this.onChangeWrapper('message')}
          />
          <button className='btn btn--emphasize' type='submit'>
            <svg className='btn__icon'>
              <use xlinkHref={`#${emailIcon.id}`} />
            </svg>
            <span className='btn__text'>Send</span>
          </button>
        </form>
      </section>
    );
  }
}

export default ContactForm;
