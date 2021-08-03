import React, {useState,useEffect} from 'react'
import Filter from '../components/Filter'
import Header from '../components/header/Header'
import styles from './TeacherDashboard.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import CourseCard from '../component/courseCard'
import firebase from '../firebase';
import { MyContext } from '../Context';
import { useContext } from 'react';
import Activities from '../components/teacher/Activities'
import moment from "moment";

function TeacherDashboard() {
    const { user , showmodules, teacherModules } = useContext(MyContext);
    const db = firebase.firestore();

    useEffect(() => {
        db
        .collection("teachers")
        .add({
            created_at: moment().format("MMM Do YY"),
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

    },[]);
    
    
    useEffect(()=> {
        teacherModules()
    },[])
    


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
            <div className={styles.middle__container}>

                <h1>Welcome {user.displayName}</h1>
                <div className={styles.module__container}>
                    {console.log(showmodules)}
                    <h2 className={styles.text}>Activities</h2>

                    {showmodules &&  showmodules.map((module) =>{
                        return <Activities module={module} key={module.id}/>
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default TeacherDashboard
