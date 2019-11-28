import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { rhythm, scale } from '../utils/typography';

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
                padding: '4px 8px',
                marginRight: '4px',
                borderRadius: '3px',
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
            <div
                style={{
                    ...scale(-1 / 5),
                    display: `block`,
                    marginBottom: rhythm(1),
                    marginTop: rhythm(-1),
                }}
            >
                <div style={{ float: 'right' }}>
                    <Link to="/blog/">Back to Blog Posts</Link>
                </div>
                <h2>{title}</h2>
                <div
                    style={{
                        display: 'flex',
                        marginBottom: rhythm(1),
                    }}
                >
                    {tags && tags.map(getTag)}
                    <div className="blogPost-date">Posted on {date}</div>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
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
