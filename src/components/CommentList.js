import React, { useEffect } from "react";
import CommentContent from "./CommentContent";
import { mapStateToProps } from "../layouts/Layout";
import { connect } from "react-redux";
import { fetchComments } from "../actions/commentsActions";

const CommentList = (props) => {
  
  useEffect(()=>props.dispatch(fetchComments()),[])

    if (!props.params.commentId) {
      if (!props.comments.length) {
        return <>Нет ни одного комментария</>;
      }
      const comments = props.comments.map(comment => {
        return <CommentContent key={comment.id} {...comment} />;
      });
      return (
        <div>
          <h1>Комментарии</h1>
          {comments}
        </div>
      );
    } else {
      const comment = props.comments.find(comment => {
        return comment.id == props.params.commentId;
      });
      return (
        <div>
          <h1>Комментарии</h1>
          <CommentContent {...comment} />
        </div>
      );

  }
 

  }
export default connect(mapStateToProps)(CommentList);




// class CommentList extends Component {

//   render() {
//     if (!this.props.params.commentId) {
//       if (!this.props.comments.length) {
//         return <>Нет ни одного комментария</>;
//       }
//       const comments = this.props.comments.map(comment => {
//         return <CommentContent key={comment.id} {...comment} />;
//       });
//       return (
//         <div>
//           <h1>Комментарии</h1>
//           {comments}
//         </div>
//       );
//     } else {
//       const comment = this.props.comments.find(comment => {
//         return comment.id == this.props.params.commentId;
//       });
//       return (
//         <div>
//           <h1>Комментарии</h1>
//           <CommentContent {...comment} />
//         </div>
//       );
//     }

//   }
//   componentDidMount() {
//     this.props.dispatch(fetchComments());
//   }
// }
// export default connect(mapStateToProps)(CommentList);
