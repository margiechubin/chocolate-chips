import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
    const { edges } = data.allMarkdownRemark;
    return (
        <Layout>
            <SEO
                title="Blog Posts"
                keywords={[`accessibility`, `margie`, `developer`, `react`, `a11y`]}
            />
            <h2>Read my thoughts</h2>
            <ul className="List">
                {edges.map(edge => {
                    const { frontmatter: fileItem } = edge.node;
                    return (
                        <li key={fileItem.title} style={{ marginTop: '16px' }}>
                            <Link to={fileItem.path}>{fileItem.title}</Link> - {fileItem.excerpt} 
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
