import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const link_style = {color: 'white', textDecoration: 'none'}

const ListLink = props => (
  <li style={{ display: 'inline', marginRight: '1rem'}}>
    <Link to={props.to} style={link_style}>
      {props.children}
    </Link>
  </li>
);

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ display: 'inline' }}>
        <Link to="/" style={link_style}>
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <ListLink to='/'>Home</ListLink>
        <ListLink to='/page2/'>About</ListLink>
        <ListLink to="/now/">Now</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
