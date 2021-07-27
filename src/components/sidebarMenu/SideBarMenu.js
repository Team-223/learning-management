import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SideBarMenu.module.css'

export default function SideBarMenu({mydash, module, exercise, addAsign, announcement, addAnnouncement, grades }) {
    return (
        <div className={styles.sidebar_menu_container}>
            <div className={styles.sidebar_menu_content}>
                <Link to='/student-dashboard'>
                    <p>{ mydash }</p>
                </Link>
                <Link to='/course-module'>
                    <p>{ module }</p>
                </Link>
                <Link to='/exercises'>
                    <p>{ exercise }</p>
                </Link>
                <Link to='/add-assignment'>
                    <p>{ addAsign }</p>
                </Link>
                <Link to='/grades'>
                    <p>{ grades }</p>
                </Link>
                <Link to='/add-announcements'>
                    <p>{ addAnnouncement }</p>
                </Link>
                <Link to='/announcements'>
                    <p>{ announcement }</p>
                </Link>
            </div>
        </div>
    )
}
