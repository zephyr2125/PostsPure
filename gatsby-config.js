/**
 * Gatsby configuration file
 * @see https://www.gatsbyjs.org/docs/gatsby-config/
 * @author Zephyr
 * @since 2022-04-21
 * @link https://github.com/zephyr2125/gatsby-wordpress
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.REACT_APP_API_URL_GRAPHQL,
          hostingWPCOM: false,
          useACF: true,
          acfOptionPageIds: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
  ],
  pathPrefix: `/fe_postspure`,
}