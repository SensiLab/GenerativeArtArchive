module.exports = {
  siteMetadata: {
    // siteUrl: "https://www.yourdomain.tld",
    title: "Generative Art Archive",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "entries",
        path: "./entries",
      },
      __key: "entries",
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "concepts",
    //     path: "./entries/concepts",
    //   },
    //   __key: "concepts",
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "algorithms",
    //     path: "./entries/algorithms",
    //   },
    //   __key: "algorithms",
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "examples",
    //     path: "./entries/examples",
    //   },
    //   __key: "examples",
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "artworks",
    //     path: "./entries/artworks",
    //   },
    //   __key: "artworks",
    // },
    `gatsby-transformer-remark`,
  ],
};
