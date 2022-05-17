import { useStaticQuery, graphql } from "gatsby"

export const useEntriesData = () => {
    const entries = useStaticQuery(
      graphql`
        query entriesData {
            concepts: allMarkdownRemark(filter: {frontmatter: {type: {eq: "concept"}}}) {
            nodes {
                slug: gatsbyPath(filePath: "/entries/{MarkdownRemark.parent__(File)__relativeDirectory}/{MarkdownRemark.parent__(File)__name}")
                frontmatter {
                title
                type
                thumbnail {
                    publicURL
                }
                }
            }
            }
            algorithms: allMarkdownRemark(filter: {frontmatter: {type: {eq: "algorithm"}}}) {
            nodes {
                slug: gatsbyPath(filePath: "/entries/{MarkdownRemark.parent__(File)__relativeDirectory}/{MarkdownRemark.parent__(File)__name}")
                frontmatter {
                title
                type
                thumbnail {
                    publicURL
                }
                }
            }
            }
            examples: allMarkdownRemark(filter: {frontmatter: {type: {eq: "example"}}}) {
            nodes {
                slug: gatsbyPath(filePath: "/entries/{MarkdownRemark.parent__(File)__relativeDirectory}/{MarkdownRemark.parent__(File)__name}")
                frontmatter {
                title
                type
                thumbnail {
                    publicURL
                }
                }
            }
            }
            artworks: allMarkdownRemark(filter: {frontmatter: {type: {eq: "artwork"}}}) {
            nodes {
                slug: gatsbyPath(filePath: "/entries/{MarkdownRemark.parent__(File)__relativeDirectory}/{MarkdownRemark.parent__(File)__name}")
                frontmatter {
                title
                type
                thumbnail {
                    publicURL
                }
                }
            }
            }
      }
      `
    )
    return entries
  }