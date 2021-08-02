import React, {useContext} from 'react';
import styles from './Header.module.css'
import { MyContext } from '../../Context'
import firebase from '../../firebase';
import { useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();

    const signOut = () => {
        firebase.auth().signOut();
        history.push('/');
        console.log('logged out successfully')
    }

    const { user } = useContext(MyContext);
    return (
        <div className={styles.header__container}>
            <div className={styles.header__left}>
                <img src='../images/company-logo.png' alt='logo' />
            </div>
            <div 
                onClick={()=> signOut()}
                className={styles.header__right}>
                <img src='/images/login.png' alt='login' />
                
                <h3 className={styles.login}>{user? 'Logout':'Login'}</h3>
                
            </div>
        </div>
    )
}

export default Header
