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
      <div>
        <form>
          <input type="text" className="commentText" />
          <input type="submit" onClick={() => this.getCommentValue()} /> Submit
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
