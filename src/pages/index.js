import React from "react"
import Layout from "../components/Layout"
import { home } from "../styles/modules/home.module.css"

function Home() {
  return (
    <Layout>
      <div className={home}>
        <h2>Software Developer</h2>
      </div>
    </Layout>
  )
}

export default Home
