import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import styled from 'styled-components';

import './styles.css';

const LayoutDiv = styled.div`
    margin-bottom: 1.45rem;
    max-width: 960px;
    margin: 0 auto;
    padding: 1.45rem 1rem;
`;

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <LayoutDiv>
                <Header siteTitle={data.site.siteMetadata.title} />
                <main>{children}</main>
            </LayoutDiv>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
