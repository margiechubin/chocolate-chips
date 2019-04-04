import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';

const Template = props => {
    const {
        html,
        frontmatter: { title, date, tags },
    } = props.data.markdownRemark;

    // could map tags to colors
    const getTag = tag => (
        <div
            key={tag}
            style={{
                backgroundColor: '#037567',
                color: 'white',
                padding: '4px',
            }}
        >
            {tag}
        </div>
    );

    return (
        <Layout>
            <SEO
                title={`${title}`}
                keywords={[`accessibility`, `margie`, `developer`]}
            />
            <div style={{ margin: '1.45rem 0' }}>
                <div style={{ float: 'right' }}>
                    <Link to="/blog">Back to Blog Posts</Link>
                </div>
                <h2>{title}</h2>
                <div
                    style={{
                        display: 'flex',
                        margin: '1rem 0',
                    }}
                >
                    {tags && tags.map(getTag)}
                    <div style={{ padding: '4px' }}>Posted on {date}</div>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Link to="/blog">Back to Blog Posts</Link>
        </Layout>
    );
};

export default Template;

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
            html
            frontmatter {
                title
                date
                tags
            }
        }
    }
`;
