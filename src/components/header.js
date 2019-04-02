import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    margin-bottom: 1.45rem;
    max-width: 960px;
    margin: 0 auto;
    padding: 1.45rem 0;
`;

const StyledH1 = styled.h1`
    display: inline;
`;

const StyledNav = styled.nav`
    display: inline;
    float: right;
    line-height: 2;
`;

// I want a hover state for the links
const ListItem = styled.li`
    display: inline;
    margin-left: 1.5rem;
    list-style-type: none;
    &:hover {
        background-color: lavender;
    }
`;

const Header = ({ siteTitle }) => {
    const link_style = { color: 'black', textDecoration: 'none' };

    const NavLink = props => (
        <ListItem>
            <Link
                to={props.to}
                style={link_style}
                activeStyle={{ color: '#69d798' }}
            >
                {props.children}
            </Link>
        </ListItem>
    );

    return (
        <StyledHeader>
            <StyledH1>
                <Link to="/" style={link_style}>
                    {siteTitle}
                </Link>
            </StyledH1>
            <StyledNav>
                <ul>
                    <NavLink to="/">Home</NavLink>
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
