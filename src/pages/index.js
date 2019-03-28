import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`accessibility`, `margie`, `developer`]} />
    <h1>Hi!</h1>
  </Layout>
)

export default IndexPage
