import React from 'react';
import { connect } from 'react-redux';
import Spinner from './spinner';
import {
  addComment
} from '../action-creators';
import {
  Map,
  List
} from 'immutable';

export class AddComment extends React.Component {

  getCommentValue() {
    const commentValue = document.getElementsByClassName('commentText')[0].value;
    console.log(commentValue);
    this.props.addComment(commentValue);
  }
  
  render() {
    return (
      <div className="comment">
        <h1> Add your comment here! </h1>
        <form>
          <label>Comment: </label><input type="text" className="commentText" />
          <br/>
          <input type="submit" value="Comment!" onClick={() => this.getCommentValue()} />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addComment: text => dispatch(addComment(text))
  }
}
export const AddCommentContainer = connect(mapStateToProps, mapDispatchToProps)(AddComment);
