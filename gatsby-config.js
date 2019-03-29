module.exports = {
  siteMetadata: {
    title: `Margie Chubin`,
    description: `Margie is really cool`,
    author: `@margarinechubs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        // background_color: `#663399`,
        theme_color: `#663399`,
        // display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      },
    }
  ],
}
