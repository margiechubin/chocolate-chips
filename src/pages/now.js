import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NowPage = () => {
    const getNowItem = ({ title, date = '', description, link, linkText }) => (
        <li
            key={title}
            style={{
                marginTop: '32px',
                borderLeft: '5px solid #037567',
                paddingLeft: '16px',
            }}
        >
            <h3 style={{ display: 'inline' }}>{title}</h3>{date && <span> - {date}</span>}
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
                            date
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
                            keywords={[`accessibility`, `margie`, `developer`, `react`, `a11y`]}
                        />
                        <h2>What am I doing now?</h2>
                        <ul className="List">{now && now.map(getNowItem)}</ul>
                    </Layout>
                );
            }}
        />
    );
};

export default NowPage;
