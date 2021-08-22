import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SideBarMenu.module.css'

export default function SideBarMenu({studentdash, teacherdash, studentmodule, teachermodule, teacherexercise, studentexercise, addAsign, announcement, addAnnouncement, teachergrades, studentgrades }) {
    return (
        <div className={styles.sidebar_menu_container}>
            <div className={styles.sidebar_menu_content}>
                <Link to='/student-dashboard'>
                    <p>{ studentdash }</p>
                </Link>
                <Link to='/teacher-dashboard'>
                    <p>{ teacherdash }</p>
                </Link>
                <Link to='/student-module'>
                    <p>{ studentmodule }</p>
                </Link>
                <Link to='/teacher-module'>
                    <p>{ teachermodule }</p>
                </Link>
                <Link to='/student-exercises'>
                    <p>{ studentexercise }</p>
                </Link>
                <Link to='/teacher-exercises'>
                    <p>{ teacherexercise }</p>
                </Link>
                <Link to='/teacher-dashboard/add-assignment'>
                    <p>{ addAsign }</p>
                </Link>
                <Link to='/teacher-grades'>
                    <p>{ teachergrades }</p>
                </Link>
                <Link to='/student-grades'>
                    <p>{ studentgrades }</p>
                </Link>
                <Link to='/teacher-dashboard/add-announcements'>
                    <p>{ addAnnouncement }</p>
                </Link>
                <Link to='/announcements'>
                    <p>{ announcement }</p>
                </Link>
            </div>
        </div>
    )
}
