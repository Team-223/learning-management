import React from 'react'
import StudentModules from '../components/studentModules/StudentModules'
import Announcement from '../components/announcement/Announcement'
import styles from './StudentDashboard.module.css'
import Filter from '../components/Filter'
import Header from '../components/header/Header'

function StudentDashboard() {
    return (
        <div className={styles.dashboard__container}>
            <Header />
            <div className={styles.dashboard__page}>
            <div className={styles.sidebar__container}>
                <div className={styles.filter__container}>
                    <Filter />
                </div>
            </div>
            <div className={styles.dashboard__modules}>
                <Announcement />
                <StudentModules />
                <StudentModules />
                <StudentModules />
                <StudentModules />
            </div>
            </div>
            
        </div>
    )
}

export default StudentDashboard
