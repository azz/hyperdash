module.exports = {
  siteMetadata: {
    title: `hyperdash`,
  },
  plugins: [
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
