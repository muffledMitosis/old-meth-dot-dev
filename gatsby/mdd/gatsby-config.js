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
        color: "mdd-blue-strong",
      },
      {
        name: "About",
        onClickLocation: '/about',
        color: "mdd-green-strong",
      },
    ]
  },
  plugins: [
    'gatsby-plugin-postcss'
  ],
};
