import * as React from "react"
import { Link } from "gatsby"
import { useEntriesData } from "../../entry-queries"

import Layout from "../../layout/content-list"

function Concepts({ data }) {
  const entries = useEntriesData()
    return (
      <Layout>
        <div className="entries">
          <h1>Concepts</h1>
          <ul>
            {entries.concepts.nodes.map(entry => (
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
      </Layout>
    )
  }
  
export default Concepts