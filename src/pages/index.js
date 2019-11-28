import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO
            title="Home | Margie"
            keywords={[`accessibility`, `margie`, `developer`, `react`, `a11y`]}
        />
        <h2>Hi there, I'm Margie Chubin. I'm a Chicago-based software engineer passionate about web development, accessibility, and good food.</h2>
        I currently work on <a href="https://sproutsocial.com/">Sprout Social</a>'s web team, championing accessibility and creating delightful experiences for our customers.
    </Layout>
);

export default IndexPage;
