import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const linkHoverColor = 'lavender';

const StyledHeader = styled.header`
    margin-bottom: 1.45rem;
    display: flex;
    justify-content: space-between;
`;

const StyledH1 = styled.h1`
    &:hover {
        background-color: ${linkHoverColor};
    }
`;

const StyledNav = styled.nav`
    display: flex;
    line-height: 2.5;
    list-style: none;
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
    const linkActiveStyle = { color: '#037567', textDecoration: 'underline' };

    const NavLink = props => (
        <NavLinkListItem>
            <Link
                to={props.to}
                style={linkStyle}
                activeStyle={linkActiveStyle}
                partiallyActive={true}
            >
                {props.children}
            </Link>
        </NavLinkListItem>
    );

    return (
        <StyledHeader>
            <StyledH1>
                <Link to="/" style={linkStyle}>
                    {siteTitle}
                </Link>
            </StyledH1>
            <StyledNav>
                <ul>
                    {/* <NavLink to="/resume/">Resume</NavLink> */}
                    <NavLink to="/now/">Now</NavLink>
                    <NavLink to="/blog/">Blog</NavLink>
                    <NavLink to="/contact/">Contact</NavLink>
                </ul>
            </StyledNav>
        </StyledHeader>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
