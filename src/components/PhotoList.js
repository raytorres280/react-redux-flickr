import React from 'react';
import { Link } from 'react-router';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';

class PhotoList extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			photos: []
		};
	}

	render() {
		return(
				<div>
					<h1>Photos list....</h1>
					<SearchBar />
					<Link to="profile" className="btn btn-primary btn-lg">profile</Link>

				</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		courses: state.photos
	};
}

export default connect(mapStateToProps)(PhotoList);