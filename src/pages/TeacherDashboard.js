import React, {useEffect} from 'react'
import Filter from '../components/Filter'
import Header from '../components/header/Header'
import styles from './TeacherDashboard.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import CourseCard from '../component/courseCard'
import firebase from '../firebase';
import { MyContext } from '../Context';
import { useContext } from 'react';

function TeacherDashboard() {
    const { user } = useContext(MyContext);
    const db = firebase.firestore();

    useEffect(() => {
        db
        .collection("teachers")
        .add({
            created_at: new Date().toString(),
            email: user.email,
            name: user.displayName,
            uid: user.uid
        })
        .then((docRef) => {
            console.log("Document written with ID: teacher added ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    })


    return (
        <div className={styles.dashboard__container}>
            <Header />
            <div className={styles.dashboard__box}>
                <SideBarMenu 
                    teacherdash='My Dashboard'
                    module='Modules'
                    exercise='Exercises'
                    grades='Student Grades'
                    addAsign='Add Assignments'
                    addAnnouncement='Add Announcement'
                />
                <Filter />
            </div>
            <div className={styles.teacher__activities}>
                <div className={styles.activities}>
                    <h2>added Module title</h2>
                    <h3>Date: </h3>
                </div>
                <div className={styles.activities}>
                    <h2>added Announcement</h2>
                    <h3>Date: </h3>
                </div>
            </div>
        </div>
    )
}

export default TeacherDashboard
