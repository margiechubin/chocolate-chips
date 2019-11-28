import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { rhythm } from '../utils/typography';

const Header = ({ siteTitle }) => {
    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        padding: '4px',
        textTransform: 'uppercase',
        fontFamily: '"PT Sans", sans-serif',
    };
    const linkHoverColor = '#573ede';
    const linkActiveStyle = { backgroundColor: linkHoverColor, color: 'white' };

    const NavLink = ({ to, children }) => (
        <li className="mainNav-link">
            <Link
                to={to}
                style={linkStyle}
                activeStyle={linkActiveStyle}
                partiallyActive={true}
            >
                {children}
            </Link>
        </li>
    );

    return (
        <header
            style={{
                marginBottom: rhythm(1.5),
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <h1>
                <Link
                    to="/"
                    style={{
                        ...linkStyle,
                        marginLeft: '-4px',
                        letterSpacing: '2px',
                        fontSize: '1.6rem',
                    }}
                    activeStyle={linkActiveStyle}
                >
                    {siteTitle}
                </Link>
            </h1>
            <nav className="mainNav">
                <ul style={{ marginLeft: '0' }}>
                    {/* <NavLink to="/resume/">Resume</NavLink> */}
                    {/* <NavLink to="/now/">Now</NavLink> */}
                    <NavLink to="/speaking/">Speaking</NavLink>
                    <NavLink to="/blog/">Writing</NavLink>
                    <NavLink to="/contact/">Contact me</NavLink>
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
