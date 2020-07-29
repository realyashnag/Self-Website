import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import Layout from '../components/layout';
import FourOhFour from '../sections/404';

const Index = () => (
    <Layout>
        <Parallax pages={1}>
            <FourOhFour offset={0} />
        </Parallax>
    </Layout>
);

export default Index;
