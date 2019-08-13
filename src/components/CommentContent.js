import React, { Component } from "react";
import { Link } from "react-router";

const CommentContent = (props) => {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/comments/${props.id}`}>
            Комментарий к посту №{props.postId}
          </Link>
        </div>
        <div className="card-body text-secondary">
          <p>{props.name}</p>
          <p>{props.body}</p>
        </div>
      </div>
    )
  
}


export default CommentContent


// class CommentContent extends Component {
//   render() {
//     return (
//       <div className="card border-secondary mb-3">
//         <div className="card-header">
//           <Link to={`/comments/${this.props.id}`}>
//             Комментарий к посту №{this.props.postId}
//           </Link>
//         </div>
//         <div className="card-body text-secondary">
//           <p>{this.props.name}</p>
//           <p>{this.props.body}</p>
//         </div>
//       </div>
//     );
//   }
// }