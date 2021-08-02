import React, {useState, useEffect} from 'react';
import styles from './Header.module.css'

function Header() {

    return (
        <div className={styles.header__container}>
            <div className={styles.header__left}>
                <img src='../images/company-logo.png' alt='logo' />
            </div>
            <div className={styles.header__right}>
                <img src='/images/login.png' alt='login' />
                <h3 className={styles.login}>Login</h3>
            </div>
        </div>
    )
}

export default Header
