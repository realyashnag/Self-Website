/** @jsx jsx */
import React from 'react';
import { Global, css } from '@emotion/core';
import { Styled, jsx } from 'theme-ui';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import SEO from './seo';

library.add(faGithub, faLinkedin, faEnvelope, faFileAlt);

type LayoutProps = { children?: React.ReactNode; className?: string };

const Layout = ({ children, className }: LayoutProps) => (
    <Styled.root>
        <Global
            styles={css({
                '*': {
                    boxSizing: `inherit`,
                    '&:before': {
                        boxSizing: `inherit`
                    },
                    '&:after': {
                        boxSizing: `inherit`
                    }
                },
                html: {
                    fontSize: `18px`
                },
                body: {
                    margin: 0,
                    padding: 0,
                    boxSizing: `border-box`,
                    textRendering: `optimizeLegibility`,
                    WebkitFontSmoothing: `antialiased`,
                    MozOsxFontSmoothing: `grayscale`
                },
                '::selection': {
                    backgroundColor: `primary`,
                    color: `white`
                }
            })}
        />
        <SEO />
        <main className={className}>{children}</main>
    </Styled.root>
);

export default Layout;
