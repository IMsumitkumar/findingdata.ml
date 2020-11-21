module.exports = {
  siteMetadata: {
    siteTitle: `FindingData`,
    defaultTitle: `Sumit | My Learning`,
    siteTitleShort: `Sumit`,
    siteDescription: `A personal and blogspot website for data Scientist`,
    siteUrl: `https://www.findingdata.ml/`,
    siteAuthor: `@sumit`,
    siteImage: ``,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/IMSumitKumar`,
        baseDir: `findingdata.ml`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://dazzling-williams-3d5af9.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
