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

	componentWillReceiveProps(newProps) {
		this.setState({photos: newProps.photos});
	}

	photoGrid() {
		const photos = this.state.photos.slice();
		const gridItems = photos.map((photo) => (
			<div key={photo.link} className="col-lg-2 col-md-4 col-sm-12">
				<div className="card">
					<img className="card-photo" src={photo.media.m} />
					<text>
						{photo.title}
					</text>
				</div>
			</div>
		));

		let grid = <div></div>;
		let gridRows = [];
		while(gridItems.length > 0) {
			let gridRow = <div className="row"></div>;
				gridRow = React.cloneElement(
					gridRow,
					null,
					[gridItems.pop(), gridItems.pop(), gridItems.pop(), gridItems.pop(), gridItems.pop(), gridItems.pop()]
				);
				gridRows.push(gridRow);
		}
		grid = React.cloneElement(
			grid,
			null,
			gridRows
		);

		return grid;
	}
	render() {
		return(
				<div>
					<SearchBar />
					{this.photoGrid()}
				</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	let newState = {photos: state.photos};
	return newState;
}


export default connect(mapStateToProps)(PhotoList);