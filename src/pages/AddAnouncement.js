import React, { useRef } from 'react'
import Header from '../components/header/Header'
import styles from './AddAnouncement.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import firebase from '../firebase'
import { Container } from '@material-ui/core'


function AddAnouncement() {

    const titleRef = useRef();
    const announcementRef = useRef();

    // FIRESTORE SECTION
    const db = firebase.firestore();
    const addAnnouncement = (e) => {
        e.preventDefault();

        db
        .collection('announcements')
        .add({
            created_at: new Date().toString(),
            title: titleRef.current.value,
            announcement: announcementRef.current.value,
        })
        .then((docRef) => {
            console.log("Document written with ID: annpuncement added  ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        titleRef.current.value = '';
        announcementRef.current.value = '';
    }

    
    return (
        <div className={styles.anouncement__container}>
            <Header />
            <div className={styles.sidebar__container}>
                <Container>
                    <SideBarMenu 
                        teacherdash='My Dashboard'
                        teachermodule='Modules'
                        teacherexercise='Exercises'
                        teachergrades='Student Grades'
                        addAsign='Add Assignments'
                        addAnnouncement='Add Announcement'
                    />
                </Container>
            </div>
            <div className={styles.add__anouncement}>
                <form>
                    <div className={styles.announcement__title}>
                        {/* <p>Title of the Announcment</p> */}
                        <input
                        className={styles.title}
                        placeholder='Title of the Announcment'
                        type='text'
                        name='title'
                        ref={titleRef}
                        
                        />
                    </div>
                    <hr size='1' width='80%' color='black'/>
                    <div className={styles.announcement__body}>
                        <textarea 
                        placeholder='add your Announcement'
                        name='body'
                        ref={announcementRef}
                        />
                    </div>
                    <br/>
                    <br/>
                    <input 
                        onClick={(e)=> addAnnouncement(e)}
                        className={styles.submit} 
                        type='submit' />
                </form>
            </div>
        </div>
    )
}

export default AddAnouncement
