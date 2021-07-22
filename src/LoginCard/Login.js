import React from 'react'
import styles from './Login.module.css'

function Login() {
    return (
        <div className={styles.login__container}>
            <div className={styles.login__buttons}>
                <button className={styles.github}>Log in With GitHub</button>
                <button className={styles.google}>Log in With Google</button>
            </div>
            <span className={styles.middle__txt}>Or with email</span>
            <div className={styles.login__inputs}>
                <input 
                    placeholder='Email'
                    type='email'
                />
                <input
                    placeholder='Password'
                    type='password' 
                />
                <button 
                    className={styles.submit__btn}
                    type='submit'
                >
                    Login In
                </button>
            </div>
            <h3 style={{'color': '#FC0707'}}>Having issues logging in?</h3>
            <h3>Clearing your cookies could reslove it</h3>
            <div className={styles.login__footer}>
                <h3 >New here? <h3 style={{'color': '#0A05FF'}}>Sign up</h3></h3>
                <h3 style={{'color': '#0A05FF'}}>Forgot Password?</h3>
            </div>
        </div>
    )

}

export default Login 
