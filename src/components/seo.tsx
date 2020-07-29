import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata';

const defaultProps = {
    children: null
};

type Props = {
    children?: React.ReactNode;
};

const SEO = ({ children }: Props) => {
    const { title, siteUrl, description, language, author } = useSiteMetadata();

    return (
        <Helmet title={title}>
            <html lang={language} />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:url" content={siteUrl} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:creator" content={author} />
            <meta name="gatsby-theme" content="@lekoarts/gatsby-theme-cara" />
            {children}
        </Helmet>
    );
};

SEO.defaultProps = defaultProps;

export default SEO;
