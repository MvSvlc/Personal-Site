import React from "react"
import Layout from "../components/Layout"
import { notfound } from "../styles/modules/notfound.module.css"

const NotFound = () => {
  return (
    <Layout>
      <div className={notfound}>
        <h2>404 Page Not Found</h2>
        <h3>Sorry, that page doesn't exist</h3>
        <p>
          Check that you typed the address correctly, feel free to
          <br />
          check out the other pages on the website!
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
