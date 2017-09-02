import React from 'react';
import { connect } from 'react-redux';
import * as photoActions from '../actions/photoActions';

class SearchBar extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			searchField: ''
		};
	}

	// updateSearchField = (event) => {
	// 	let searchField = null;
	// 	if (event) {
	// 		searchField = event.target.value;
	// 	}
	// 	this.setState({searchField: searchField});
	// }

	// onClickSearch = () => {
	// 	this.props.dispatch(photoActions.searchWithTags(this.state.searchField));
	// }

	//why am i getting syntax errors for these functions^?

	render() {
		return (
			<div>
				<input type="text" onChange={(event) => this.setState({searchField: event.target.value})} value={this.state.searchField}/>
				<h1>{this.state.searchField}</h1>
				<button
					className="btn btn-info"
					onClick={() => this.props.dispatch(photoActions.getPhotosByTag(this.state.searchField))}
				>Search</button>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
}


export default connect(mapStateToProps)(SearchBar);