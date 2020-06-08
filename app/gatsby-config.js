module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-55491347-1',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The Meatball Stoppe',
        short_name: 'TMS',
        description: 'Try our delicious, savory selections of authentic, specialty meatballs',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Vollkorn', 'Dancing Script'],
        display: 'swap',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '8fhpgddd51q7',
        accessToken: process.env.CONTENTFUL_SECRET,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        documentPaths: ['./src/**/*.{ts,tsx}'],
      },
    },
  ],
};
