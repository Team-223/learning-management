import React, { useRef } from 'react'
import Header from '../components/header/Header'
import styles from './AddAnouncement.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import firebase from '../firebase'


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
                <SideBarMenu 
                    mydash='My Dashboard'
                    module='Modules'
                    exercise='Exercises'
                    grades='Student Grades'
                    addAsign='Add Assignments'
                    addAnnouncement='Add Announcement'
                />
            </div>
            <div className={styles.add__anouncement}>
                <form>
                    <div className={styles.announcement__title}>
                        <p>Title of the Announcment</p>
                        <input
                        type='text'
                        name='title'
                        ref={titleRef}
                        
                        />
                    </div>
                    <hr size='4' width='80%' color='black'/>
                    <div className={styles.announcement__body}>
                        <textarea 
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