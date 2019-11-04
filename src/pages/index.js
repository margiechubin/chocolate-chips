import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO
            title="Home | Margie"
            keywords={[`accessibility`, `margie`, `developer`, `react`, `a11y`]}
        />
        <h2>Hi, there.</h2>
        <p>
            I'm a software engineer excited about front end development, accessibility, and good food. I'm working on this website as I play with Gatsby, GraphQL, and figuring out what I think is one of developers' hardest problems - designing your own website.
        </p>
    </Layout>
);

export default IndexPage;
