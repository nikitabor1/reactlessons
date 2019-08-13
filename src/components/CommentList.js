import React, { Component } from "react";
import axios from "axios";
import CommentContent from "./CommentContent";
import { mapStateToProps } from "../layouts/Layout";
import { connect } from "react-redux";
import { fetchComments } from "../actions/commentsActions";

class CommentList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     comments: []
  //   };
  // }
  render() {
    if (!this.props.params.commentId) {
      if (!this.props.comments.length) {
        return <>Нет ни одного комментария</>;
      }
      const comments = this.props.comments.map(comment => {
        return <CommentContent key={comment.id} {...comment} />;
      });
      return (
        <div>
          <h1>Комментарии</h1>
          {comments}
        </div>
      );
    } else {
      const comment = this.props.comments.find(comment => {
        return comment.id == this.props.params.commentId;
      });
      return (
        <div>
          <h1>Комментарии</h1>
          <CommentContent {...comment} />
        </div>
      );
    }





  }
  componentDidMount() {
    this.props.dispatch(fetchComments());
    // axios
    //   .get("http://jsonplaceholder.typicode.com/comments/")
    //   .then(response => {
    //     this.setState({ comments: response.data });
    //   });
  }
}
export default connect(mapStateToProps)(CommentList);
