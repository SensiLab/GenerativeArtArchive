import * as React from "react"
import { graphql, Link } from "gatsby"

import Footer from "../layout/footer"
import "../layout/footer.css"
import "../layout/index.css"

// markup
const Index = ({ data }) => {
  return (
    <main className="homepage">
      <title>Home Page</title>
      <header>
        <div class="full-inner">
          <h1>Generative Systems Archive</h1>
        </div>
      </header>
      <section>
        <h1>A home for generative systems.</h1>
        <p>An online resource where creative practioners, designers, students and researches interested in generative systems and methods can find information about existing generative systems, their cultural and technical contexts.</p>
      </section>
      <section className="featured full">
        <div className="full-inner">
          <h2>Featured article</h2>
          <h1>Randomness</h1>
          <p>Randomness is a concept that is well integrated into our common speech, however it escapes unequivocal definitions. The word random is commonly used to describe either things that happen by chance –unexpectedly or with no discernible cause–, or to characterise collections or series of things that don’t seem to have any discernible pattern or order.</p>
          <a href="/entries/concepts/randomness/">Start reading</a>
        </div>
      </section>
      <section id="entries">
        <div>
          <h1>Explore generative systems</h1>
          <h2>
            Concepts
          </h2>
          <ul>
              {data.concepts.nodes.map(entry => (
                <li key={entry.frontmatter.title}>
                  <Link to={entry.slug}>
                    <div className="img-placeholder"></div>
                    <div className="entry-detail">
                      <h3>
                        {entry.frontmatter.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
      </div>
      <div>
        <h2>
          Algorithms
        </h2>
        <ul>
            {data.algorithms.nodes.map(entry => (
              <li key={entry.frontmatter.title}>
                  <Link to={entry.slug}>
                    <div className="img-placeholder"></div>
                    <div className="entry-detail">
                      <h3>
                        {entry.frontmatter.title}
                      </h3>
                    </div>
                  </Link>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h2>
          Examples
        </h2>
        <ul>
            {data.examples.nodes.map(entry => (
              <li key={entry.frontmatter.title}>
                  <Link to={entry.slug}>
                    <div className="img-placeholder"></div>
                    <div className="entry-detail">
                      <h3>
                        {entry.frontmatter.title}
                      </h3>
                    </div>
                  </Link>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h2>
          Artworks
        </h2>
        <ul>
            {data.artworks.nodes.map(entry => (
              <li key={entry.frontmatter.title}>
                <h3>
                  <Link to={entry.slug}>
                    <h3>
                      {entry.frontmatter.title}
                    </h3>
                  </Link>
                </h3>
              </li>
            ))}
        </ul>
      </div>
      </section>
      <Footer />
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