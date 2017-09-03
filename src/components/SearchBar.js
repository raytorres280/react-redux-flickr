import React from 'react';
import { connect } from 'react-redux';
import * as photoActions from '../actions/photoActions';

class SearchBar extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			searchField: ''
		};

		this.onClickSearch = this.onClickSearch.bind(this);
		this.onChangeText = this.onChangeText.bind(this);
	}

	onChangeText(event) {
		this.setState({searchField: event.target.value});
	}

	onClickSearch() {
		this.props.dispatch(photoActions.getPhotosByTag(this.state.searchField));
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.onChangeText} value={this.state.searchField}/>
				<button
					className="btn btn-info"
					onClick={this.onClickSearch}
				>Search</button>
			</div>
		);
	}
}

export default connect()(SearchBar);
