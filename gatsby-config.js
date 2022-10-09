/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@VHromyk",
    person: {
      name: "Vitalii",
      age: 32,
    },
    simpleData: ["item 1", "item 2"],
    complexData: [
      {
        name: "vitalii",
        age: 32,
      },
      {
        name: "john",
        age: 24,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
}
