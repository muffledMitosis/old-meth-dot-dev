module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "mdd",
    navbarInfo : [
      {
        name: "Projects",
        onClickLocation: '/projects',
        color: "text-mdd-red-strong",
      },
      {
        name: "Blog",
        onClickLocation: '/blog',
        color: "text-mdd-blue-strong",
      },
      {
        name: "About",
        onClickLocation: '/about',
        color: "text-mdd-green-strong",
      },
    ]
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/posts/blogs/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-images`,
        path: `${__dirname}/src/posts/blogs/images/`
      }
    },
    `gatsby-transformer-remark`
  ],
};
