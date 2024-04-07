import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About</h4>
            <p>About section content goes here...</p>
          </div>
          <div className="col-md-4">
            <h4>Help</h4>
            <p>Help section content goes here...</p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <address>
              1234 Main Street <br />
              City, State ZIP Code <br />
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
