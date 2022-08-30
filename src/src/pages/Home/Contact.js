import React from "react";
import emailjs from "emailjs-com";
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FcAddressBook } from "react-icons/fc";

import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_zykgh9h", e.target, "C1UIEfl0Q59TaE21m")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast("Message Sent");
  }

  return (
    <div className="mt-20">
      <section id="contract">
        <div class="container">
          <center>
            <h1>Contact Me</h1>
          </center>
          <div class="row">
            <div class="col-md-6 contract-col1">
              <h3>get in touch...</h3>
              <p class="p">
                Creating your new website is easy with Diverse Web Design as we
                offer the best web design in Melbourne. At Diverse Web Design we
                make sure that your website targets the customers that are
                looking for your business at that exact time which leads to
                higher inquiries & sales.
              </p>

              <div class="contact-icone">
                <div>
                  <i>
                    <FcBusinessman></FcBusinessman>
                  </i>
                </div>
                <div class="i-p">
                  <b> Company </b>
                  <p>Ticket kato</p>
                </div>
              </div>
              <div class="contact-icone">
                <div>
                  <i>
                    <HiOutlineMailOpen></HiOutlineMailOpen>
                  </i>
                </div>
                <div class="i-p">
                  <b> EMAIL </b>
                  <p>info@ticketkato.com</p>
                </div>
              </div>
              <div class="contact-icone">
                <div>
                  <i>
                    <FcAddressBook></FcAddressBook>
                  </i>
                </div>
                <div class="i-p">
                  <b>address:</b>
                  <p>Rampura Bansre, Dhaka.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 contract-2">
              <h1>Message:</h1>
              <form onSubmit={sendEmail}>
                {/* <!--  --> */}
                <div class="name-email">
                  <input
                    type="text"
                    placeholder=" name"
                    name="name"
                    class="nam"
                  />
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    class="eml"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="subject"
                    class="sub"
                    name="subject"
                    className="subject"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    id=""
                    cols="60"
                    rows="6"
                    placeholder="message :"
                    class="mess"
                  ></textarea>
                </div>
                <button type="submit" onclick="from_control()">
                  Tuch me
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
