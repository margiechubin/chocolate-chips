import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledList } from '../components/styledComponents';

const NowPage = () => {
    const getNowItem = ({ title, description, link, linkText }) => (
        <li
            key={title}
            style={{
                marginTop: '48px',
                borderLeft: '3px solid #037567',
                paddingLeft: '16px',
            }}
        >
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {linkText}
                    </a>
                )}
            </div>
        </li>
    );
    return (
        <StaticQuery
            query={graphql`
                query NowQuery {
                    dataJson {
                        now {
                            title
                            description
                            link
                            linkText
                        }
                    }
                }
            `}
            render={data => {
                const {
                    dataJson: { now },
                } = data;
                return (
                    <Layout>
                        <SEO
                            title="Now"
                            keywords={[`accessibility`, `margie`, `developer`]}
                        />
                        <h2>What am I doing now?</h2>
                        <StyledList>{now && now.map(getNowItem)}</StyledList>
                    </Layout>
                );
            }}
        />
    );
};

export default NowPage;
