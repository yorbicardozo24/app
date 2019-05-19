import React, {Component} from 'react';
import firebase from 'firebase';

class Header extends Component{
    name = () =>{
        let user = firebase.auth().currentUser;
        if(user){
            let name = firebase.auth().currentUser.displayName;
            return "Welcome " + name;
        }else{
            return "Welcome " + this.props.username;
        }
        
    }
    photo = () => {
        let user = firebase.auth().currentUser;
        if(user){
            let urlPhoto = firebase.auth().currentUser.photoURL;
            return urlPhoto;
        }else{
            return "assets/img/settings.png";
        }
    }

    salir = () =>{
        alert('hola mundo');
    }

    render(){
        return(
            <header className="header">
                <div className="container-header">
                    <div className="container-header-options">
                        <ul className="options-ul">
                            <li className="greeting-user">{this.name()}</li>
                            <li className="logo-user">
                                <img alt="profile picture" src={this.photo()}/>
                                <ul className="options-ul-dos">
                                    <li><a href="#">My acount</a></li>
                                    <li><a onClick={() => firebase.auth().signOut()}>Sign out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            )
    }
}

export default Header;