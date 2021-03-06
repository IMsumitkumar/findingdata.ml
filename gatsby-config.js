module.exports = {
  siteMetadata: {
    siteTitle: `FindingData`,
    defaultTitle: `FindingData`,
    siteTitleShort: `Sumit`,
    siteDescription: `A personal and blogspot website for learners in data Science field`,
    siteUrl: `https://www.findingdata.ml/`,
    siteImage: '/banner.png',
    siteAuthor: `@sumitkumar`,
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
        githubUrl: `https://github.com/IMSumitKumar/findingdata.ml`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Finding Data`,
        short_name: `Finding Data`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
             resolve: 'gatsby-remark-mermaid',
             options: {
                 language: 'mermaid',
                 theme: 'default',
                 viewport: {
                     width: 200,
                     height: 200
                 },
                 mermaidOptions: {
                     themeCSS: ".node rect { fill: cornflowerblue; }"
                 }
             }
          }
        ]
      }
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
    'gatsby-plugin-instagram-embed',
  ],
};
