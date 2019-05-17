import React, {Component} from 'react';

class FormLogin extends Component{
    //Refs
    user = React.createRef();
    password = React.createRef();

    loginApp = (e) =>{
        e.preventDefault();

        const login = {
            user: this.user.current.value,
            password: this.password.current.value
        }

        this.props.loginUser(login); 
        e.currentTarget.reset();

    }

    render(){
        return(
            <div className="container-login">
                <form onSubmit={this.loginApp} autoComplete="off">
                    <input ref={this.user} type="text" name="username" id="username" className="container-login-input" placeholder="Username" required autoFocus/>
                    <input ref={this.password} type="password" name="password" id="password" className="container-login-input" placeholder="Password" required />
                    <input className="button-login" type="submit" value="Login" />
                </form>
                <div className="container-login-text">
                <span className="sign-up"><a href="#">Sign Up</a></span>
                <span className="forgot-password"><a href="#">Forgot password?</a></span>
                </div>
            </div>
        )
    }
}

export default FormLogin;