/** @jsx jsx */
import { Styled, useColorMode, jsx } from 'theme-ui';

const Footer = () => {
    const [colorMode, setColorMode] = useColorMode();
    const isDark = colorMode === `dark`;
    const toggleColorMode = (e: any) => {
        setColorMode(isDark ? `light` : `dark`);
    };

    return (
        <footer
            style={{
                textAlign: `center`,
                display: `block`,
                position: `absolute`,
                bottom: 0,
                color: `textMuted`,
                paddingBottom: 15
            }}
        >
            <button
                sx={{
                    variant: `buttons.toggle`,
                    fontWeight: `semibold`,
                    display: `block`,
                    mx: `auto`,
                    mb: 3
                }}
                onClick={toggleColorMode}
                type="button"
                aria-label="Toggle dark mode"
            >
                {isDark ? `Light` : `Dark`}
            </button>
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            <br />
        </footer>
    );
};

export default Footer;
