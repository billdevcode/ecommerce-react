import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import SocialMediaIcons from '../../components/SocialMediaIcons';
import './index.css'

class Contact extends Component {
  render() {
    return (
      <div className="container contact-page center">
        <h1>Contact Us</h1>

        <div class="row center">
          <ContactForm />
        </div>

        <SocialMediaIcons />
      </div>
    );
  }
}

export default Contact;
