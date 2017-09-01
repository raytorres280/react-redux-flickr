import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
	return (
		<nav>
			<IndexLink to="/" activeClassName="active">PhotoList</IndexLink>
			{" | "}
			<Link to="/profile" activeClassName="active">profile</Link>
		</nav>
	);
};

export default Header;