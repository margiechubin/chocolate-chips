import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledList } from '../components/styledComponents';

const ContactPage = () => {
    const contactMethodItem = ({ name, link }) => {
        return (
            <li key={name} style={{ marginTop: '24px' }}>
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
                        <StyledList>
                            {contact.map(contactMethodItem)}
                        </StyledList>
                    </Layout>
                );
            }}
        />
    );
};

export default ContactPage;
