import React from 'react'
import Header from '../components/header/Header'
import styles from './LandingPage.module.css';
import { BrowserRouter as Router, Link } from "react-router-dom";



function LandingPage() {
    return (
        <div className={styles.landingpage__container}>
            <Header />
            <div className={styles.landingpage__searchcourse}>
                <Link to='/course'>
                    <h3 >Search for courses</h3>
                </Link>
            </div>
            <div className={styles.landingpage__middle}>
                <div className={styles.landingpage__middle__left}>
                    <h1 className={styles.text}>Get your path with coding</h1>
                    <Link to='/login'>
                        <button className={styles.sign_btn}>Sing up & code</button>
                    </Link>
                </div>
                <div className={styles.landingpage__middle__right}>
                    <img className={styles.image} src='/images/landing-page.png' alt='landing-page' />
                </div>
            </div>
            <div className={styles.landingpage__teacher__login}>
                <img className={styles.teacherIcon} src='/images/teacher-icon.svg' alt='teacher-icon' />
                <h4>Sign up here if you are a teacher</h4>
            </div>
            <footer>Copyrights 2021 | Team LMS</footer>
        </div>
    )
}

export default LandingPage
