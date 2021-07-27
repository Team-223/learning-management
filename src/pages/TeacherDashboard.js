import React from 'react'
import Filter from '../components/Filter'
import Header from '../components/header/Header'
import AddModule from '../components/upload/AddModule'
import styles from './TeacherDashboard.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import CourseCard from '../component/courseCard'

function TeacherDashboard() {
    return (
        <div className={styles.dashboard__container}>
            <Header />
            <div className={styles.dashboard__box}>
                <SideBarMenu />
                <Filter />
            </div>
            <div className={styles.add__module}>
                <CourseCard />
            </div>
        </div>
    )
}

export default TeacherDashboard
