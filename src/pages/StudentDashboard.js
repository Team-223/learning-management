import React from 'react'
import StudentModules from '../components/studentModules/StudentModules'
import Announcement from '../components/announcement/Announcement'
import styles from './StudentDashboard.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import Filter from '../components/Filter'
import Header from '../components/header/Header'
import { Container } from '@material-ui/core'
import CourseCard from '../component/courseCard'

function StudentDashboard() {
    return (
            <div className={styles.dashboard__container}>
                <Header />
                <div className={styles.sidebar__container}>
                    <Container>
                        <SideBarMenu
                            mydash='My Dashboard'
                            module='Module'
                            exercise='Exercise'
                            grades='My Grades'
                            announcement='Announcements'
                        />
                    </Container>
                <Filter />
                </div>
                <div className={styles.dashboard__modules}>
                    <Announcement />
                    <CourseCard />
                </div>
            </div>
    )
}

export default StudentDashboard
