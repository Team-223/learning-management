import React from 'react'
import Filter from '../components/Filter'
import Header from '../components/header/Header'
import styles from './TeacherDashboard.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import CourseCard from '../component/courseCard'
import { Link } from 'react-router-dom'

function TeacherDashboard() {
    return (
        <div className={styles.dashboard__container}>
            <Header />
            <div className={styles.dashboard__box}>
                <SideBarMenu 
                    mydash='My Dashboard'
                    module='Modules'
                    exercise='Exercises'
                    grades='Student Grades'
                    addAsign='Add Assignments'
                    addAnnouncement='Add Announcement'
                />
                <Filter />
            </div>
            <div className={styles.add__module}>
                <CourseCard />
            </div>
        </div>
    )
}

export default TeacherDashboard
