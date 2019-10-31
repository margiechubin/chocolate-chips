import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import './styles.scss';

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
            <div
                style={{
                    padding: '0 16px',
                    maxWidth: '960px',
                    margin: '20px auto',
                    marginBottom: '40px',
                }}
            >
                <Header siteTitle={data.site.siteMetadata.title} />
                <main>{children}</main>
            </div>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
