import React from 'react'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import styles from './AddAssignment.module.css'
import AddModule from '../components/upload/AddModule'
import Header from '../components/header/Header'

function AddAssignement() {
    return (
        <div className={styles.assignment__container}>
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
            <div className={styles.add__Assignement}>
                <AddModule />
            </div>
        </div>
    )
}

export default AddAssignement
