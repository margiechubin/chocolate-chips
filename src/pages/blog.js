import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
    const { edges } = data.allMarkdownRemark
    return (
        <Layout>
            <SEO
                title="Now | Margie"
                keywords={[`accessibility`, `margie`, `developer`]}
            />
            <h2>What am I doing now?</h2>
            {edges.map(edge => {
                const { frontmatter: fileItem } = edge.node
                return (
                    <div key={fileItem.title}>
                        <Link to={fileItem.path}>{fileItem.title}</Link>
                    </div>
                )
            })}
        </Layout>
    )
}

export default BlogPage

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
`
