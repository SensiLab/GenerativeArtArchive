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
                'margin-left: 0!important; margin-right: 0!important;',
              linkImagesToOriginal: false
            },
          },
          "gatsby-remark-gifs"
        ],
      },
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
  ],
};
