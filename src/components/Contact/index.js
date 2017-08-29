import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import './index.css'

class Contact extends Component {
  render() {
    return (
      <div className="container text-center contact-page">
        <h1>Contact Us</h1>

        <div class="row justify-content-center">
          <ContactForm />
        </div>

        <div className="container icons">
          <div className="row">
            <div className="col">
              <a href="https://www.linkedin.com/">
                <img className="contact-image" src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/linkedin-128.png" />
              </a>
            </div>
            <div className="col">
              <a href="https://www.tumblr.com/">
                <img className="contact-image" src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/tumblr-128.png" />
              </a>
            </div>
            <div className="col">
              <a href="https://www.github.com/">
                <img className="contact-image" src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/github-128.png" />
              </a>
            </div>
            <div className="col">
              <a href="https://www.skype.com/">
                <img className="contact-image" src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/skype-128.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
