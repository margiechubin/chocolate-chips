import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';

const Template = props => {
    const { title } = props.data.markdownRemark.frontmatter;
    const { html } = props.data.markdownRemark;
    return (
        <Layout>
            <SEO
                title={`${title}`}
                keywords={[`accessibility`, `margie`, `developer`]}
            />
            <h2>{title}</h2>
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
            }
        }
    }
`;
