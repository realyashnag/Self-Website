/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import Divider from '../components/divider';
import Content from '../components/content';
import Inner from '../components/inner';
import { HeaderShapes } from './header';

const FourOhFour = ({ offset }: { offset: number }) => (
    <div>
        <Divider speed={1} offset={offset}>
            <HeaderShapes />
        </Divider>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
            <Inner>
                <Styled.h1 sx={{ color: 'icon_red' }}>404 Error</Styled.h1>
                <Styled.p>Whoops! I couldn't find the page you're looking for!</Styled.p>
            </Inner>
        </Content>
    </div>
);

export default FourOhFour;
