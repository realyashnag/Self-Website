/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import Divider from '../components/divider';
import Inner from '../components/inner';
import Content from '../components/content';
import SVG from '../components/svg';
import { UpDown, UpDownWide } from '../components/animations';

export const HeaderShapes = () => (
    <div>
        <UpDown>
            <SVG
                icon="triangle"
                hiddenMobile
                width={48}
                stroke
                color="icon_orange"
                left="10%"
                top="10%"
            />
            <SVG icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
            <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
            <SVG icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
            <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
            <SVG icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
            <SVG icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
            <SVG icon="cross" width={16} stroke color="icon_pink" left="30%" top="5%" />
            <SVG icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
            <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
        <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
        <SVG icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
        <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
        <SVG icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
        <SVG icon="circle" width={64} color="icon_green" left="95%" top="5%" />
        <SVG icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
        <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
        <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </div>
);

const Header = ({ offset }: { offset: number }) => (
    <div>
        <Divider speed={1} offset={offset}>
            <HeaderShapes />
        </Divider>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
            <Inner>
                <Styled.h1>Hi, I'm Yash Nag.</Styled.h1>
                <Styled.p>I'm a data scientist and machine learning engineer. I work for Eder Labs, and occasionally pick up freelancing projects.</Styled.p>
            </Inner>
        </Content>
    </div>
);

export default Header;
