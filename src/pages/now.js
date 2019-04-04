import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledList } from '../components/styledComponents';

const NowPage = () => {
    const getNowItem = d => (
        <li key={d.title}>
            <h3>{d.title}</h3>
            <p>{d.description && d.description}</p>
            {d.link && (
                <a href={d.link} target="_blank" rel="noopener noreferrer">
                    {d.linkText}
                </a>
            )}
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
                return (
                    <Layout>
                        <SEO
                            title="Now"
                            keywords={[`accessibility`, `margie`, `developer`]}
                        />
                        <h2>What am I doing now?</h2>
                        <StyledList>
                            {data && data.dataJson.now.map(getNowItem)}
                        </StyledList>
                    </Layout>
                );
            }}
        />
    );
};

export default NowPage;
