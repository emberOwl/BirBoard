import React from 'react';
import { connect } from 'react-redux';
import ImageContainer from './image-container';
import Spinner from './spinner';
import { getImages } from '../action-creators';
import CommentContainer from './comment-container'


export class Home extends React.Component {

	componentDidMount() {
		this.props.getImages();
	}
	render() {
		return (
			<div>
				<div className="message">This is a forum dedicated to sharing bird photos and talking about them! </div>
				{this.props.isLoading ?
					<Spinner /> :
					<div>
					<div>
			    	<ImageContainer imageList={this.props.imageList} />
			    	</div>
			    	<div>
			    	<CommentContainer commentList={this.props.commentList} />
	   				</div>
	   				</div>
	      		}
	   		</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    imageList: state['images'].get('imageList').toJS(),
    isLoading: state['images'].getIn(['view', 'isLoading']),
    commentList: state['comments']
  };
}

function mapDispatchToProps(dispatch) {
	return {
		getImages: () => dispatch(getImages())
	}
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
