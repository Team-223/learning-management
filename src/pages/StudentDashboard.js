import React from 'react'
import StudentModules from '../components/studentModules/StudentModules'
import Announcement from '../components/announcement/Announcement'
import styles from './StudentDashboard.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'

function StudentDashboard() {
    return (
            <div className={styles.dashboard__container}>
                <SideBarMenu></SideBarMenu>
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
