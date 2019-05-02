import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <h2>NOT FOUND</h2>
        <p>This is not the page you are looking for.</p>
    </Layout>
);

export default NotFoundPage;
