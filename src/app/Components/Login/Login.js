import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LogoLogin from './LogoLogin';
import FormLogin from './FormLogin';
import Home from '../Home';

class Login extends Component{
    loginUser = login => {
        if(login){
            let usuariologin = {
                username: login.user,
                password: login.password
            };
            
                let url = "api/rgit/login.php";
                let jsonString = JSON.stringify(usuariologin);
                $.ajax({
                   type: "POST",
                   url: url,
                   data: {data : jsonString},
                   success: function(data)
                   {
                    let dataF = JSON.parse(data);
                    // console.log(dataF.username);
                    if(dataF){
                        ReactDOM.render(
                            <Home 
                                username={dataF.username}
                                nivel={dataF.nivel}
                            />,
                            document.getElementById('app')
                          );
                    }else{
                        alert('Usuario o contraseña incorrecta');
                    }
                   }
                 });    
        }
    }

    render(){
        return(
            <div className="container-main">
                <div className="container-form-logo">
                    <LogoLogin />
                    <h1>Sign In</h1>
                </div>
                <div className="container-form-login">
                    <FormLogin 
                        loginUser = {this.loginUser}
                    />
                </div>
            </div>
        )
    }
}

export default Login;