import React from 'react';
import ReactDOM from 'react-dom';
import {Login} from './Login';
import {Menu} from './Menu';



class App extends React.Component {
    render() {
        const menuItems = [
            {title:"Главная", href: "/"},
            {title:"О нас", href: "/aboutus"},
            {title:"Услуги", href: "/services"},
            {title:"Контакты", href: "/contacts"}
        ];
        const loginText = "Enter your login";
        const pathwordText = "Enter your pathword";
        const EntbtnText = "Enter";
        
        return ( 
            <div>
                <h1>Первое приложение на React</h1> 
                <p>Hello React</p> 
                <Menu items = {menuItems} titleMenu = "Основное меню сайта"/>
                <Login name = {loginText} pathw = {pathwordText} enterButText ={EntbtnText}/>
            </div>
        )
    }
};

ReactDOM.render( < App / > , document.querySelector('#root'));