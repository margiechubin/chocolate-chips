import React from "react"
import { graphql } from "gatsby"

const Template = props => {
    const { title } = props.data.markdownRemark.frontmatter
    const { html } = props.data.markdownRemark
    return (
        <div>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}

export default Template

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`
