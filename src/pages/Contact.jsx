import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import contact from "../assets/contact.svg";

import { MdCall } from "react-icons/md";
import { IoIosMail, IoMdMail } from "react-icons/io";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nhkbwdw",
        "template_mzrecu9",
        form.current,
        "HLA8vDd5MuUgGUPsn"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Email send successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <section id="contact">
        <motion.h1
          animate={{
            borderRadius: ["50%", "0%", "50%", "0%", "50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          whileHover={{ scale: [null, 1.2, 1.1] }}
        >
          Contact <span>Info</span>
        </motion.h1>

        {/* Contact Info */}
        <div>
          {/* Social Link */}
          <div>
            <div className="social_icons">
              <motion.p
                whileHover={{ scale: [null, 0.8, 0.9] }}
                transition={{ duration: 0.3 }}
              >
                <MdCall /> <span>+91 8011545825</span>
              </motion.p>
              <motion.p
                whileHover={{ scale: [null, 0.8, 0.9] }}
                transition={{ duration: 0.3 }}
              >
                <IoIosMail /> <span>abhijitbiswas8859@gmail.com</span>
              </motion.p>
            </div>

            {/* Social Icons */}
            <div className="social_icons_contact">
              {/* Mail */}
              <motion.a
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
                href="mailto:abhijitbiswas8859@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <IoMdMail />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
                href="https://www.linkedin.com/in/abhijit-biswas-3b6586162/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </motion.a>

              {/* Github */}
              <motion.a
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
                href="https://github.com/abhijitnr"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </motion.a>
            </div>

            {/* Direct contant me using mail */}
            <div className="contact_form">
              <form ref={form} onSubmit={sendEmail}>
                <label>
                  Name <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <br />
                <label>
                  Email <span>*</span>
                </label>
                <br />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
                <label>
                  Message <span>*</span>
                </label>
                <br />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <br />
                <input
                  className="send_button"
                  type="submit"
                  value="Send"
                  required
                />
              </form>
            </div>
          </div>

          {/* Contact image */}
          <div>
            <img src={contact} alt="Contact" />
          </div>
        </div>

        <motion.p
          whileHover={{ scale: [null, 0.9, 0.8] }}
          transition={{ duration: 0.3 }}
        >
          Designed and Developed by <span>Abhijit Biswas</span>, &copy;
          Copyright 2023. All rights reserved.
        </motion.p>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
