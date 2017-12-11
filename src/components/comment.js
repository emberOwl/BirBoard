import React from 'react';
import { connect } from 'react-redux';

export default class Comment extends React.Component {

  render() {
    const { id, text } = this.props;
    return(
      <div key={id}> {text} </div>
    );
  }

}