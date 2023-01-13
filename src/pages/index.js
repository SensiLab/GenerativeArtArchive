import * as React from "react"
import { Link } from "gatsby"

import Footer from "../layout/footer"
import HeaderExpanded from "../layout/header-expanded"
import "../layout/index.css"
import "../layout/content-list.css"
import { useEntriesData } from "../entry-queries"

// markup
const Index = ({ data }) => {
  const entries = useEntriesData()

  return (
    <main className="homepage">
      <title>Home Page</title>
      <HeaderExpanded />
      <section className="featured full">
        <div className="full-inner">
          <div className="featured-title-matter">
            <h2>Featured article</h2>
            <h1>Randomness</h1>
          </div>
          <div className="featured-description">
            <p>Randomness is a concept that is well integrated into our common speech, however it escapes unequivocal definitions. The word random is commonly used to describe either things that happen by chance –unexpectedly or with no discernible cause–, or to characterise collections or series of things that don’t seem to have any discernible pattern or order.</p>
            <a className="start-reading" href="/entries/concepts/randomness/">Start reading</a>
          </div>
        </div>
      </section>
      <section className="entries">
        <div>
          <h1>Explore generative systems</h1>
          <h2>
            <Link to="/entries/concepts">Concepts</Link>
          </h2>
          <ul>
            {entries.concepts.nodes.map(entry => (
                <li key={`concept-${entry.frontmatter.title}`}>
                  <Link to={entry.slug}>
                    {entry.frontmatter.thumbnail
                      ? <img className="thumbnail" src={entry.frontmatter.thumbnail.publicURL} />
                      : <div className="img-placeholder"></div>
                    }
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
          {entries.algorithms.nodes.map(entry => (
              <li key={`algorithm-${entry.frontmatter.title}`}>
                  <Link to={entry.slug}>
                    {entry.frontmatter.thumbnail
                      ? <img className="thumbnail" src={entry.frontmatter.thumbnail.publicURL} />
                      : <div className="img-placeholder"></div>
                      }
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
          {entries.examples.nodes.map(entry => (
              <li key={entry.frontmatter.title}>
                  <Link to={entry.slug}>
                    {entry.frontmatter.thumbnail
                        ? <img className="thumbnail" src={entry.frontmatter.thumbnail.publicURL} />
                        : <div className="img-placeholder"></div>
                      }
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
          {entries.artworks.nodes.map(entry => (
              <li key={`artwork-${entry.frontmatter.title}`}>
                <h3>
                  <Link to={entry.slug}>
                    {entry.frontmatter.thumbnail
                        ? <img className="thumbnail" src={entry.frontmatter.thumbnail.publicURL} />
                        : <div className="img-placeholder"></div>
                      }
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
