import React from "react";
import StartupzSvg from "../Header/StartupzSvg";

function Footer() {
  return (
    <footer className="container">
    <div className="d-flex flex-column flex-lg-row justify-content-between gap-4  m-4 ">
      <div className=" w-100 w-lg-25 card border-0  justify-content-between footer-logo">
        <StartupzSvg />
        <span>
          2020 Startupz.
          <br />
          All rights reserved.
        </span>
      </div>
      <div className="card border-0 w-100 w-lg-25  ">
        <p>Companies</p>
        <a href="Tolq">Tolq</a>
        <a href="LegalSite">LegalSite</a>
        <a href="Codekeeper">Codekeeper</a>
        <a href="FeedbackLabs">Feedback Labs</a>
      </div>
      <div className="card border-0 w-100 w-lg-25 ">
        <p>Contact</p>
        <address>
          World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM
          The Hague The Netherlands
        </address>
        <a href="mailto:x@example.com">Send us an email</a>
      </div>
      <div className="card border-0 w-50 w-lg-25 align-items-lg-center align-items-start">
        <p>Follow us</p>
        <a href="twitter" className="mb-2">
          <img src="https://i.postimg.cc/MpwpHt2m/twitter.png" alt="" />
        </a>
        <a href="linkedin" className="mb-2">
          <img src="https://i.postimg.cc/qvvW1C8d/Linkedin.png" alt="" />
        </a>
        <a href="instagram" className="mb-2">
          <img src="https://i.postimg.cc/tJGLkSzr/instagram.png" alt="" />
        </a>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
