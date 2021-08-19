import React, {useContext, useState} from 'react';
import styles from './Header.module.css'
import { MyContext } from '../../Context'
import firebase from '../../firebase';
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from '../darkmode/UseDarkMode';
import { GlobalStyles } from '../darkmode/globalStyles';
import { lightTheme, darkTheme } from '../darkmode/Themes'
import Toggle from '../darkmode/Toggle';
import { Link } from 'react-router-dom'

function Header() {

    const [theme, toggleTheme, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const history = useHistory();

    const signOut = () => {
        firebase.auth().signOut();
        history.push('/');
        console.log('logged out successfully')
    }

    const { user } = useContext(MyContext);
    if(!mountedComponent) return <div/>
    return (
      <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
        <div className={styles.header__container}>
            <div className={styles.header__left}>
                <Link to='/'>
                    <img src='../images/company-logo.png' alt='logo' />
                    <div className={styles.hover}>
                        <div className={styles.text}>Back to Landing page</div>
                    </div>
                </Link>
            </div>
            <div>
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <div 
                onClick={()=> signOut()}
                className={styles.header__right}>
                <img src='/images/login.png' alt='login' />
                
                <h3 className={styles.login}>{user? 'Logout':'Login'}</h3>
            </div>
            
        </div>
        </ThemeProvider>
    )
}

export default Header
