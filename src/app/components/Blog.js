import React from 'react';
import Post from "./Post";

export default class Blog extends React.Component{
    render(){
            const posts = this.props.allPosts.map((item) =>{
                return <Post key = {item.post_id} title = {item.title} postbody = {item.postbody}/>
            });
    return (<div>
                <ul>
                {posts}
                </ul>
            </div>)
    }
};


