import React from "react"
import Layout from "../components/Layout"
import { about } from "../styles/modules/about.module.css"

function About() {
  return (
    <Layout>
      <div className={about}>
        <h2>About Me</h2>
      </div>
    </Layout>
  )
}

export default About
