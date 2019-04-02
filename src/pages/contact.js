import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledList = styled.ul`
    margin-left: 0;
    list-style: none;
`

const ContactPage = () => {
    const contactMethodItem = contactMethod => {
        return (
            <li key={contactMethod.name}>
                <a href={contactMethod.link}>{contactMethod.name}</a>
            </li>
        )
    }
    return (
        <StaticQuery
            query={graphql`
                query ContactQuery {
                    dataJson {
                        contact {
                            name
                            link
                            msg
                        }
                    }
                }
            `}
            render={data => {
                const contactMethods = data && data.dataJson.contact
                return (
                    <Layout>
                        <SEO title="Contact Margie" />
                        <h2>Contact Me</h2>
                        <StyledList>
                            {contactMethods.map(contactMethodItem)}
                        </StyledList>
                    </Layout>
                )
            }}
        />
    )
}

export default ContactPage
