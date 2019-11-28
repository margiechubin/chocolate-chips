import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FaTwitter, FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import Layout from '../components/layout';
import SEO from '../components/seo';

const iconMap = icon => ({
    Twitter: <FaTwitter />,
    Email: <FaEnvelope />,
    LinkedIn: <FaLinkedinIn />,
    Github: <FaGithub />,
    Instagram: <FaInstagram />,
}[icon]);

const ContactPage = () => {
    const contactMethodItem = ({ name, link, msg }) => {
        return (
            <li key={name}>
                <a href={link} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    {iconMap(name)}
                    <div style={{ marginLeft: '12px' }}>{name}</div>
                </a>
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
