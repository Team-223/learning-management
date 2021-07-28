import React, {useContext} from 'react';
import styles from './Header.module.css'
import { MyContext } from '../../Context'
import firebase from 'firebase';
import { useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();

    const signOut = () => {
        firebase.auth().signOut();
        history.push('/');
    }

    const { user, name , gituser } = useContext(MyContext);
    return (
        <div className={styles.header__container}>
            <div className={styles.header__left}>
                <img src='../images/company-logo.png' alt='logo' />
            </div>
            <div 
                onClick={signOut}
                className={styles.header__right}>
                <img src='/images/login.png' alt='login' />
                
                <h3 className={styles.login}>{user || name || gituser? 'Logout':'Login'}</h3>
                
            </div>
        </div>
    )
}

export default Header
