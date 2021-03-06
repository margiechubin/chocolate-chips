import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ResumePage = () => (
    <Layout>
        <SEO
            title="Resume"
            keywords={[`accessibility`, `margie`, `developer`]}
        />
        <h2>Hi resume!</h2>
        <p>Nothing to see here at the moment... check LinkedIn!</p>
    </Layout>
);

export default ResumePage;
