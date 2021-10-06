import * as React from "react"
import { graphql, Link } from "gatsby"

import Header from "../layout/header"

// styles
// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }

// markup
const Index = ({ data }) => {
  return (
    <main>
      <title>Home Page</title>
      <Header/>
      <section>
        <h1>
          Concepts
        </h1>
        <ul>
            {data.concepts.nodes.map(entry => (
              <li key={entry.frontmatter.title}>
                <Link to={entry.slug}>
                  {entry.frontmatter.title}
                </Link>
              </li>
            ))}
        </ul>
      </section>
      <section>
        <h1>
          Algorithms
        </h1>
        <ul>
            {data.algorithms.nodes.map(entry => (
              <li key={entry.frontmatter.title}>
                <Link to={entry.slug}>
                  {entry.frontmatter.title}
                </Link>
              </li>
            ))}
        </ul>
      </section>
      <section>
        <h1>
          Examples
        </h1>
        <ul>
            {data.examples.nodes.map(entry => (
              <li key={entry.frontmatter.title}>
                <Link to={entry.slug}>
                  {entry.frontmatter.title}
                </Link>
              </li>
            ))}
        </ul>
      </section>
      <section>
        <h1>
          Artworks
        </h1>
        <ul>
            {data.artworks.nodes.map(entry => (
              <li key={entry.frontmatter.title}>
                <Link to={entry.slug}>
                  {entry.frontmatter.title}
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </main>
  )
}

export default Index

export const query = graphql`
  {
    concepts: allMarkdownRemark(filter: {frontmatter: {type: {eq: "concept"}}}) {
      nodes {
        slug: gatsbyPath(filePath: "/entries/{MarkdownRemark.parent__(File)__relativeDirectory}/{MarkdownRemark.parent__(File)__name}")
        frontmatter {
          title
          type
        }
      }
    }
    algorithms: allMarkdownRemark(filter: {frontmatter: {type: {eq: "algorithm"}}}) {
      nodes {
        slug: gatsbyPath(filePath: "/entries/{MarkdownRemark.parent__(File)__relativeDirectory}/{MarkdownRemark.parent__(File)__name}")
        frontmatter {
          title
          type
        }
      }
    }
    examples: allMarkdownRemark(filter: {frontmatter: {type: {eq: "example"}}}) {
      nodes {
        slug: gatsbyPath(filePath: "/entries/{MarkdownRemark.parent__(File)__relativeDirectory}/{MarkdownRemark.parent__(File)__name}")
        frontmatter {
          title
          type
        }
      }
    }
    artworks: allMarkdownRemark(filter: {frontmatter: {type: {eq: "artwork"}}}) {
      nodes {
        slug: gatsbyPath(filePath: "/entries/{MarkdownRemark.parent__(File)__relativeDirectory}/{MarkdownRemark.parent__(File)__name}")
        frontmatter {
          title
          type
        }
      }
    }
  }
`