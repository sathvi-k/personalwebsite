import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>
        Thank you for stopping by and taking time to learn more about me!
        If you&apos;d like to learn more, connect with me on Linkedin, check out my GitHub,
        take a peek at my resume, or shoot me an email!
      </h2>
      <div className="contact-container">
        <a className="icons" href="https://www.linkedin.com/in/sathvika-korandla/"> <i className="fab fa-linkedin" aria-hidden="true" /></a>
        <a className="icons" href="https://github.com/sathvi-k"> <i className="fab fa-github" /></a>
        <a className="icons" href="https://drive.google.com/file/d/1KRsuA6ke_VhRgFYqygktCncL1qrAiv_1/view?usp=sharing"><i className="far fa-file" /> </a>
        <a className="icons" href="mailto:sathvika.r.korandla.22@dartmouth.edu"><i className="far fa-envelope" /> </a>
      </div>
    </div>
  );
};

export default Contact;
