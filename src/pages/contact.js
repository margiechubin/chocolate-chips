import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => {
    const contactMethodItem = ({ name, link }) => {
        return (
            <li key={name} style={{ marginTop: '16px' }}>
                <a href={link}>{name}</a>
            </li>
        );
    };
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
                const {
                    dataJson: { contact },
                } = data;
                return (
                    <Layout>
                        <SEO title="Contact" />
                        <h2>Let's connect!</h2>
                        <ul className="List">
                            {contact.map(contactMethodItem)}
                        </ul>
                    </Layout>
                );
            }}
        />
    );
};

export default ContactPage;
