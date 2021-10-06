import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../../layout/entry"

function Entry({ data }) {  
    return (
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Layout>
    )
  }
  
export default Entry

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        type
      }
      html
    }
  }
`