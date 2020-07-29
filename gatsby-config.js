module.exports = {
    siteMetadata: {
        title: 'Yash Nag',
        siteUrl: 'https://www.yashnag.me',
        description: "Yash Nag Portfolio",
        language: 'en',
        author: 'Yash Nag',
        basePath: '/'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-typescript',
        'gatsby-plugin-emotion',
        'gatsby-plugin-theme-ui',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-robots-txt',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-145422100-1'
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Yash Nag Portfolio`,
                short_name: `Yash Nag`,
                start_url: `/`,
                background_color: `#141821`,
                theme_color: `#ed64a6`,
                display: `standalone`,
                icon: './static/favicon.ico'
            }
        }
    ]
};
