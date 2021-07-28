import React, {useState, useContext} from 'react'
import styles from './Login.module.css'
import firebase from '../firebase';
import 'firebase/auth';
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { MyContext } from "../Context";

function Login() {
    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [changeState, setChangeState] = useState('Log In'); 
    const { setGituser, setName } = useContext(MyContext);

    // **************************** FUNCTIONS ****************************
    const handleLogin = async() => {
        let provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider)
        .then(results => console.log(results))
        history.push('/student-dashboard')
    }

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/student-dashboard')
        })
        .catch(error => alert(error.message, 'No user found, Please Register'));
    }

    const register = e => {
        e.preventDefault();
    
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/student-dashboard')
                }
            })
            .catch(error => alert(error.message))
    }

    const resetPass = () => {
        firebase.auth().sendPasswordResetEmail({email})
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }


    const githubLogin = async() => {
        let provider = new firebase.auth.GithubAuthProvider();
        
        await firebase
        .auth()
        .signInWithPopup(provider)
        .then((results) => {
            console.log(results);
            let usr = results;
            setGituser(usr);
            history.push('/student-dashboard')
        })
        .catch((error) => console.log(error));
        
    }


   console.log('name', setName)
   console.log('git', setGituser)

    const changeToRegister = () => setChangeState('Register');



    return (
        
        <div className={styles.login__page}>
            <div  className={styles.login__container}>
                <div className={styles.login__buttons}>

                    <button 
                        onClick={githubLogin} 
                        className={styles.github}>Log in With GitHub</button>
                    <button  
                        onClick={()=> handleLogin()}
                    
                        className={styles.google}
                    >
                    Log in With Google
                    </button> 
                </div>
                <span className={styles.middle__txt}>Or with email</span>
                <div className={styles.login__inputs}>
                
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Email'
                        type='email'
                    />
                    <input
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        placeholder='Password'
                        type='password' 
                    />
                    {
                        changeState == 'Register'?  
                            <input
                                onChange={ e => setName(e.target.value)}
                                placeholder='FullName'
                                type='text' 
                            />
                        : ''
                    }
                    <button 
                        onClick={changeState === 'Log In' ? signIn: register}
                        className={styles.submit__btn}
                        type='submit'
                    >
                    {changeState}
                    </button>
                </div>
                <h3 style={{'color': '#FC0707'}}>Having issues logging in? </h3>
                <h3>Clearing your cookies could reslove it</h3>
                <div className={styles.login__footer}>
                    <h3 >New here? 
                    <h3  
                        onClick={changeToRegister}
                        className={styles.register}>
                    Sign up</h3>
                    </h3>
                    <h3 style={{'color': '#0A05FF'}}>Forgot Password?</h3>
                </div>
            </div>
        </div>
    )

}

export default Login 
