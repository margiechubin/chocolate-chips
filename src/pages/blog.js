import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledList } from '../components/styledComponents';

const BlogPage = ({ data }) => {
    const { edges } = data.allMarkdownRemark;
    return (
        <Layout>
            <SEO
                title="Blog Posts"
                keywords={[`accessibility`, `margie`, `developer`]}
            />
            <h2>Blog Posts</h2>
            <StyledList>
                {edges.map(edge => {
                    const { frontmatter: fileItem } = edge.node;
                    return (
                        <li key={fileItem.title}>
                            <Link to={fileItem.path}>{fileItem.title}</Link>
                        </li>
                    );
                })}
            </StyledList>
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
                    }
                }
            }
        }
    }
`;
