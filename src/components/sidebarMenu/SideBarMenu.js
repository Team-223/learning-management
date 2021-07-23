import React from 'react'
import styles from './SideBarMenu.module.css'

export default function SideBarMenu() {
    return (
        <div className={styles.sidebar_menu_container}>
            <div className={styles.sidebar_menu_content}>
                <p>Modules</p>
                <p>Exercises</p>
                <p>Notes</p>
                <p>Announcements</p>
            </div>
        </div>
    )
}
