import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import Layout from '../components/layout';
import Header from '../sections/header';
import Contact from '../sections/contact';

const Index = () => (
    <Layout>
        <Parallax pages={2}>
            <Header offset={0} />
            <Contact offset={1} />
        </Parallax>
    </Layout>
);

export default Index;
