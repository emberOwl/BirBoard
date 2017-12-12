import React from 'react';
import Comment from './comment';

export default class CommentContainer extends React.Component {

	render() {
		const { commentList } = this.props;
		return (
			<div className="comment">
				{commentList.map(comment => <Comment id={comment.key} {...comment} />)}
			</div>
		);
	}
}
