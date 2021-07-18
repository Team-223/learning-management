import React from 'react';
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.header__container}>
            <div className={styles.header__left}>
                <img src='/images/fullLogo.svg' alt='logo' />
            </div>
            <div className={styles.header__right}>
                <img src='/images/login-btn.svg' alt='login' />
                <h3 className={styles.login}>Login</h3>
            </div>
        </div>
    )
}

export default Header
