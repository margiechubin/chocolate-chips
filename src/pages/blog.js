import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const BlogPage = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <Layout>
            <SEO
                title="Blog Posts"
                keywords={[
                    `accessibility`,
                    `margie`,
                    `developer`,
                    `react`,
                    `a11y`,
                    `gatsby`,
                    `javascript`,
                ]}
            />
            <h2>Some musings</h2>
            <ul className="List">
                {posts.map(edge => {
                    const { frontmatter: fileItem } = edge.node;
                    return (
                        <li
                            key={fileItem.title}
                            style={{ marginBottom: rhythm(1) }}
                        >
                            <Link to={fileItem.path}>{fileItem.title}</Link>
                            <p>{fileItem.excerpt}</p>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
};

export default BlogPage;

export const query = graphql`
    query blogQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date
                        excerpt
                    }
                }
            }
        }
    }
`;
