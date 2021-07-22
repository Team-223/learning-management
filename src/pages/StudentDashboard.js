import React from 'react'
import StudentModules from '../components/studentModules/StudentModules'
import Announcement from '../components/announcement/Announcement'
import styles from './StudentDashboard.module.css'

function StudentDashboard() {
    return (
        <div className={styles.dashboard__contanier}>
            <div className={styles.dashboard__modules}>
                <Announcement />
                <StudentModules />
                <StudentModules />
                <StudentModules />
                <StudentModules />
            </div>
            
        </div>
    )
}

export default StudentDashboard
