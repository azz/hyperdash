module.exports = {
  siteMetadata: {
    title: `hyperdash`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: './data/',
      },
    },
  ],
};
