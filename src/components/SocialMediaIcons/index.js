import React, { Component } from 'react';
import './index.css';

class SocialMediaIcons extends Component {
  render () {
    return (
      <div className="icons">
        <div className="row center">
          <div className="col s12 m6 offset-m3">
            <a href="https://www.linkedin.com/">
              <img className="icon" src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/linkedin-128.png" alt="linkedin icon"/>
            </a>

            <a href="https://www.tumblr.com/">
              <img className="icon" src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/tumblr-128.png" alt="tumblr icon"/>
            </a>

            <a href="https://www.github.com/">
              <img className="icon" src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/github-128.png" alt="github icon"/>
            </a>

            <a href="https://www.skype.com/">
              <img className="icon" src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/skype-128.png" alt="skype icon"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialMediaIcons;
