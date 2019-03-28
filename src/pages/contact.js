import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"


const ContactPage = () => {
	const contactMethodItem = contactMethod => {
		return <li key="contactMethod.name">
			<a href={contactMethod.link}>{contactMethod.name}</a>
		</li>
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
		    	const contactMethods = data && data.dataJson.contact;
		    	return (
			       <Layout>
				    <SEO title="Contact Me" />
				    <h1>Contact Me</h1>
				    <ul>
				    	{contactMethods.map(contactMethodItem)}
				    </ul>
				  </Layout>
		    	)
		    }}
	  	/>
	)
}

export default ContactPage
