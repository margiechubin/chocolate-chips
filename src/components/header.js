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
        fontFamily: '"Roboto", sans-serif',
    };
    const linkActiveStyle = { borderBottom: '3px solid #573ede' }

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
            }}
        >
            <nav className="mainNav" aria-label="Main site navigation">
                <h1>
                    <Link
                        to="/"
                        style={{
                            ...linkStyle,
                            marginLeft: '-4px',
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}
                        activeStyle={linkActiveStyle}
                    >
                        {siteTitle}
                    </Link>
                </h1>
                <ul className="mainNav-links">
                    {/* <NavLink to="/resume/">Resume</NavLink> */}
                    {/* <NavLink to="/now/">Now</NavLink> */}
                    <NavLink to="/speaking/">Speaking</NavLink>
                    <NavLink to="/blog/">Writing</NavLink>
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
