import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const linkHoverColor = 'lavender';
const secondaryColor = '#037567';

const StyledH1 = styled.h1`
    &:hover {
        background-color: ${linkHoverColor};
    }
`;

const NavLinkListItem = styled.li`
    display: inline;
    margin-left: 1.5rem;
    padding: 4px;
    &:hover {
        background-color: ${linkHoverColor};
    }
`;

const Header = ({ siteTitle }) => {
    const linkStyle = { color: 'black', textDecoration: 'none' };
    const linkActiveStyle = {
        color: secondaryColor,
        textDecoration: 'underline',
    };
    const headerLinkActiveStyle = { backgroundColor: linkHoverColor };

    const NavLink = ({ to, children }) => (
        <NavLinkListItem>
            <Link
                to={to}
                style={linkStyle}
                activeStyle={linkActiveStyle}
                partiallyActive={true}
            >
                {children}
            </Link>
        </NavLinkListItem>
    );

    return (
        <header
            style={{
                marginBottom: '1.45rem',
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <StyledH1>
                <Link
                    to="/"
                    style={linkStyle}
                    activeStyle={headerLinkActiveStyle}
                >
                    {siteTitle}
                </Link>
            </StyledH1>
            <nav
                style={{
                    display: 'flex',
                    lineHeight: '2.5',
                    listStyle: 'none',
                }}
            >
                <ul style={{ marginLeft: '0' }}>
                    {/* <NavLink to="/resume/">Resume</NavLink> */}
                    <NavLink to="/now/">Now</NavLink>
                    <NavLink to="/blog/">Blog</NavLink>
                    <NavLink to="/contact/">Contact</NavLink>
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
