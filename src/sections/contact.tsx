/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Divider from '../components/divider';
import Inner from '../components/inner';
import Content from '../components/content';
import SVG from '../components/svg';
import { UpDown, UpDownWide, waveAnimation } from '../components/animations';
import Footer from './footer';

export const ContactShapes = () => (
    <div>
        <UpDown>
            <SVG icon="upDown" hiddenMobile width={8} color="icon_blue" left="70%" top="20%" />
            <SVG icon="triangle" width={8} stroke color="icon_pink" left="25%" top="5%" />
            <SVG icon="box" width={12} color="icon_green" left="15%" top="30%" />
        </UpDown>
        <UpDownWide>
            <SVG icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
            <SVG icon="circle" width={6} color="icon_brightest" left="85%" top="15%" />
            <SVG icon="hexa" stroke width={8} color="icon_yellow" left="50%" top="40%" />
            <SVG icon="circle" width={6} color="icon_brightest" left="4%" top="20%" />
            <SVG icon="cross" width={8} stroke color="icon_purple" left="10%" top="70%" />
        </UpDownWide>
        <SVG icon="hexa" width={8} stroke color="icon_orange" left="80%" top="70%" />
        <SVG icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
        <SVG icon="hexa" width={8} stroke color="icon_orange" left="80%" top="70%" />
    </div>
);

const InnerWave = styled.div`
    path {
        ${waveAnimation(`15s`)};
    }
`;

const Contact = ({ offset }: { offset: number }) => (
    <div>
        <Divider fill="divider" speed={0.2} offset={offset}>
            <div
                sx={{
                    position: `absolute`,
                    bottom: 0,
                    width: `full`,
                    transform: `matrix(1, 0, 0, -1, 0, 0)`
                }}
            >
                <InnerWave
                    sx={{
                        position: `relative`,
                        height: `full`,
                        svg: { width: `100%`, height: `40vh` }
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="contact-wave"
                        viewBox="0 0 800 338.05"
                        preserveAspectRatio="none"
                    >
                        <path>
                            <animate
                                attributeName="d"
                                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                                repeatCount="indefinite"
                                dur="30s"
                            />
                        </path>
                    </svg>
                </InnerWave>
            </div>
        </Divider>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
            <Inner>
                <Styled.h2>Work with me</Styled.h2>
                <Styled.a
                    as={OutboundLink}
                    href="https://www.upwork.com/freelancers/~01b9ae0f867fd29195"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {` `}
                    <button
                        sx={{
                            variant: `buttons.contact`,
                            backgroundColor: 'primary',
                            color: 'icon_brightest',
                            fontWeight: `semibold`,
                            display: `inline-block`
                        }}
                        type="button"
                        aria-label="UpWork Link"
                    >
                        <FontAwesomeIcon sx={{ marginRight: '3px' }} icon={['fab', 'exchange']} />{' '}
                        UpWork
                    </button>
                </Styled.a>
                <Styled.a
                    as={OutboundLink}
                    href="https://github.com/realyashnag"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {` `}
                    <button
                        sx={{
                            variant: `buttons.contact`,
                            fontWeight: `semibold`,
                            display: `inline-block`
                        }}
                        type="button"
                        aria-label="Github Link"
                    >
                        <FontAwesomeIcon sx={{ marginRight: '3px' }} icon={['fab', 'github']} />{' '}
                        Github
                    </button>
                </Styled.a>
                <Styled.a
                    as={OutboundLink}
                    href="mailto:realyashnag@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {' '}
                    <button
                        sx={{
                            variant: `buttons.contact`,
                            backgroundColor: 'secondary',
                            color: 'icon_brightest',
                            fontWeight: `semibold`,
                            display: `inline-block`
                        }}
                        type="button"
                        aria-label="Email Link"
                    >
                        <FontAwesomeIcon sx={{ marginRight: '3px' }} icon="envelope" /> Email
                    </button>
                </Styled.a>
                <Styled.a
                    as={OutboundLink}
                    href="https://www.linkedin.com/in/realyashnag"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {' '}
                    <button
                        sx={{
                            variant: `buttons.contact`,
                            backgroundColor: '#0077B5',
                            color: 'icon_brightest',
                            fontWeight: `semibold`,
                            display: `inline-block`
                        }}
                        type="button"
                        aria-label="Linkedin Link"
                    >
                        <FontAwesomeIcon sx={{ marginRight: '3px' }} icon={['fab', 'linkedin']} />{' '}
                        Linkedin
                    </button>
                </Styled.a>
                {/* <Styled.a
                    as={OutboundLink}
                    href="/Resume.pdf"
                    target="_blank"
                    rel="nofollow"
                >
                    {' '}
                    <button
                        sx={{
                            variant: `buttons.contact`,
                            backgroundColor: 'primary',
                            color: 'icon_brightest',
                            fontWeight: `semibold`,
                            display: `inline-block`
                        }}
                        type="button"
                        aria-label="Resume Link"
                    >
                        <FontAwesomeIcon sx={{ marginRight: '3px' }} icon="file-alt" /> Resume
                    </button>
                </Styled.a> */}
            </Inner>
            <Footer />
        </Content>
        <Divider speed={0.1} offset={offset}>
            <ContactShapes />
        </Divider>
    </div>
);

export default Contact;
