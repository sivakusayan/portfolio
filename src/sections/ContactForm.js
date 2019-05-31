import React, { Component } from 'react';
import validator from 'email-validator';

import InputField from '../components/InputField';
import contactIcon from '../assets/svg/contact.svg';

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
      <section className='section' id='contact-section'>
        <div className="section__content">
          <div className='section__text'>
            <h3 className='section__title'>Contact</h3>
          </div>
          <form 
            name='contact'
            method='POST'
            data-netlify='true'
            className='form'
            onSubmit={this.onSubmit}
          >
            {/* Need this hidden field to make sure form works
                https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#step-2 */}
            <input type="hidden" name="form-name" value="contact" />
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
              invalid={!emailIsValid}
            />
            <InputField
              label='Message'
              type='textarea'
              value={message}
              onChange={this.onChangeWrapper('message')}
            />
            <div className="btn-container">
              <button className='btn btn--emphasize' type='submit'>
                <svg role="img" className='btn__icon'>
                  <title>Send Message</title>
                  <use xlinkHref={`#${contactIcon.id}`} />
                </svg>
                <span className='btn__text'>Send</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;
