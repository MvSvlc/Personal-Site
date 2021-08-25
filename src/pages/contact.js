import React from "react"
import Layout from "../components/Layout"
import { contact } from "../styles/modules/contact.module.css"

function Contact() {
  return (
    <Layout>
      <div className={contact}>
        <h2>Get In Touch</h2>
        <p>
          I am always looking for new opportunities, if you have any questions
          feel free to reach out!
        </p>
        <button>Contact Me</button>
      </div>
    </Layout>
  )
}

export default Contact
