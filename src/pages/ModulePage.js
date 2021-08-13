import React from 'react'
import Header from '../components/header/Header'
import StudentModules from '../components/studentModules/StudentModules'
import styles from './ModulePage.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'

function Module() {
    return (
        <div className={styles.module__container}>
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
            <div className={styles.module__pieces}>
                <StudentModules courseName='html'/>
                <StudentModules courseName='javascript'/>
                <StudentModules courseName='css'/>
            </div>
        </div>
    )
}

export default Module