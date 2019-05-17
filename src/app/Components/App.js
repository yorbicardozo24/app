import React,{Component} from 'react';
import Login from './Login/Login';
import Home from './Home';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//Para login en Facebook y en Google
firebase.initializeApp({
    apiKey: "AIzaSyAb2-f3gOaYuEYZ1HWzytDVLC5YxtLe9Js",
    authDomain: "mistertic-a299a.firebaseapp.com"
})

class App extends Component{
    state = {
        isSignedIn:false
    }
    uiConfig = {
        SignInFlow: "popup",
        SignInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }
    }
    componentDidMount = () =>{
        firebase.auth().onAuthStateChanged(user =>{
            //Cuando accedemos por firebase actualizamos el state
            this.setState({isSignedIn: !!user})
            //Consultamos si entramos por firebase
            if(this.state.isSignedIn){
                let name = firebase.auth().currentUser.displayName;
                let urlPhoto = firebase.auth().currentUser.photoURL;
                let email = firebase.auth().currentUser.email;
                //Enviamos una peticion a la REST API para saber si el usuario que ingreso por firebase esta en la base de datos
                // fetch('/api/users/user', {
                //     method: 'POST',
                //     body: JSON.stringify({
                //         username: name
                //     }),
                //     headers: {
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/json'
                //     }
                // })
                // .then(res => res.json({}))
                // .then(data => {
                //     //Si el usuario no esta en la base de datos se guarda
                //     if(!data.ok){
                //         fetch('/api/users/register', {
                //             method: 'POST',
                //             body: JSON.stringify({
                //                 nombre: name,
                //                 username: name,
                //                 password: "",
                //                 role: "USER_ROLE",
                //                 email: email,
                //                 img: urlPhoto,
                //                 firebase: true
                //             }),
                //             headers: {
                //                 'Accept': 'application/json',
                //                 'Content-Type': 'application/json'
                //             }
                //         })
                //         .then(res => res.json({}))
                //         .then(data => {})
                //         .catch(err => console.log(err));
                //     }
                // })
                // .catch(err => console.log(err));

            }
        })
        
        
    }

    render(){
        return(
            <div>
                {this.state.isSignedIn ? (
                    <div>
                        <Home
                            state={this.state}
                        />
                    </div>
                ) : (
                    <div>
                    <Login />
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                    </div>
                    
                )}
            </div>
        )
    }
}

export default App;