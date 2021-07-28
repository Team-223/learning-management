import React, { useState } from 'react'
import Header from '../components/header/Header'
import styles from './AddAnouncement.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'

function AddAnouncement() {
    const [announcement, setAnnouncement] = useState('')

    
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
                <form onSubmit={announcement}>
                    <div className={styles.announcement__title}>
                        <p>Title of the Announcment</p>
                        <input
                        type='text'
                        name='title'
                        onChange={setAnnouncement}
                        />
                    </div>
                    <hr size='4' width='80%' color='black'/>
                    <div className={styles.announcement__body}>
                        <textarea 
                        
                        name='body'
                        onChange={setAnnouncement}
                        />
                    </div>
                    <br/>
                    <br/>
                    <input className={styles.submit} type='submit' />
                </form>
            </div>
        </div>
    )
}

export default AddAnouncement
