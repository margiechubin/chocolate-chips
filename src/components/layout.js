import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
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
            <React.Fragment>
                <SkipNavLink />
                <div
                    style={{
                        padding: '0 16px',
                        maxWidth: '960px',
                        width: 'unset',
                        margin: '20px auto',
                        marginBottom: '40px',
                    }}
                >
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <SkipNavContent />
                    <main>{children}</main>
                </div>
            </React.Fragment>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
