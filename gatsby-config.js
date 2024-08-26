module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Generative Art Archive",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "entries",
        path: "./entries",
      },
      __key: "entries",
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `VT323s`,
            file: `https://fonts.googleapis.com/css2?family=VT323`,
          },
          {
            name: `Fira Sans`,
            file: `https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400`,
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              wrapperStyle:
                "margin-left: 0!important; margin-right: 0!important;",
              linkImagesToOriginal: false,
            },
          },
          "gatsby-remark-gifs",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "entries",
        engine: "flexsearch",
        engineOptions: "speed",
        query: `
          {
            allMarkdownRemark {
              nodes {
                slug: gatsbyPath(filePath: "/entries/{MarkdownRemark.parent__(File)__relativeDirectory}/{MarkdownRemark.parent__(File)__name}")
                id
                frontmatter {
                  title
                  type
                  tags
                }
                rawMarkdownBody
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "body", "rawMarkdownBody", "tags"],
        store: ["id", "title", "type", "tags", "slug"],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map((node) => ({
            id: node.id,
            slug: node.slug,
            title: node.frontmatter.title,
            type: node.frontmatter.type,
            tags: node.frontmatter.tags,
            body: node.rawMarkdownBody,
          })),
      },
    },
  ],
};
