import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>This Hackathon will be <strong>awesome</strong>!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
