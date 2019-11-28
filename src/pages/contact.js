import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { IconContext } from "react-icons";
import { FaTwitter, FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import Layout from '../components/layout';
import SEO from '../components/seo';


const iconMap = icon => ({
    Twitter: <FaTwitter />,
    Email: <FaEnvelope />,
    LinkedIn: <FaLinkedinIn />,
    Github: <FaGithub />,
    Instagram: <FaInstagram />,
}[icon])
const ContactPage = () => {
    const contactMethodItem = ({ name, link, msg }) => {
        return (
            <li key={name}>
                <a href={link} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}> {iconMap(name)} {name}</a>
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
                        <IconContext.Provider value={{ marginRight: '12px' }}>
                            <ul className="List">
                                {contact.map(contactMethodItem)}
                            </ul>
                        </IconContext.Provider>
                    </Layout>
                );
            }}
        />
    );
};

export default ContactPage;
