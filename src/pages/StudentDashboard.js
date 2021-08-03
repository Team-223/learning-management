import React, { useContext, useEffect } from 'react'
import StudentModules from '../components/studentModules/StudentModules'
import Announcement from '../components/announcement/Announcement'
import StudentActivities from '../components/student/StudentActivities';
import styles from './StudentDashboard.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import Filter from '../components/Filter'
import Header from '../components/header/Header'
import { Container } from '@material-ui/core'
import CourseCard from '../component/courseCard'
import firebase from '../firebase';
import { MyContext } from '../Context';


function StudentDashboard() {
    const { user, showAnnouncemets, teacherAnnounment, teacherModules, showmodules } = useContext(MyContext);

    const db = firebase.firestore();

    useEffect(()=>{
        db
        .collection("users")
        .add({
            created_at:  new Date().toString(),
            email: user.email,
            name: user.displayName,
            uid:user.uid
        })
        .then((docRef) => {
            console.log("Document written with ID: student added", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    })

    useEffect(()=> {
        teacherAnnounment();
    },[]);

    // const { user, gituser , name} = useContext(MyContext)
    return (
        <div className={styles.dashboard__container}>
                <Header />
                <div className={styles.sidebar__container}>
                    <Container>
                        <SideBarMenu
                            studentdash='My Dashboard'
                            module='Module'
                            exercise='Exercise'
                            grades='My Grades'
                            announcement='Announcements'
                        />
                         <Filter />
                    </Container>
                </div>
                <div className={styles.dashboard__modules}>
                    {user?<span className={styles.user}>Welcome {user.displayName}</span>:''}
                    {showAnnouncemets && showAnnouncemets.map((alert)=> {
                         return <Announcement alert={alert} key={alert.id}/>
                    })}
                    
                    <StudentActivities />
                </div>
            </div>
    )
}

export default StudentDashboard
