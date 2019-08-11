import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';
import {Modal,Button, Icon, Header} from 'semantic-ui-react';



class App extends React.Component {
    render() {
        const postsArr = [
            {
                post_id:1,
                title:"Lorem ipsum dolor sit",
                postbody:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nam consectetur amet consequuntur odit assumenda modi ad perspiciatis quas porro cupiditate ut eos, incidunt laudantium, magnam obcaecati. Eveniet, molestias harum."
            },
            {
                post_id:2,
                title:"Lorem ipsum dolor sit",
                postbody:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nam consectetur amet consequuntur odit assumenda modi ad perspiciatis quas porro cupiditate ut eos, incidunt laudantium, magnam obcaecati. Eveniet, molestias harum."
            },
            {
                post_id:3,
                title:"Lorem ipsum dolor sit",
                postbody:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint nam consectetur amet consequuntur odit assumenda modi ad perspiciatis quas porro cupiditate ut eos, incidunt laudantium, magnam obcaecati. Eveniet, molestias harum."
            }
        ];
        return( 
            <div>
                <Blog allPosts={postsArr}/>
                <WelcomeModal />
            </div>
        )
    }
};

ReactDOM.render( < App /> , document.querySelector('#root'));

