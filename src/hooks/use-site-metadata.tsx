import { graphql, useStaticQuery } from 'gatsby';

type Props = {
    site: {
        siteMetadata: {
            title: string;
            siteUrl: string;
            description: string;
            language: string;
            author: string;
        };
    };
};

const useSiteMetadata = () => {
    const data = useStaticQuery<Props>(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                    language
                    author
                }
            }
        }
    `);

    return data.site.siteMetadata;
};

export default useSiteMetadata;
