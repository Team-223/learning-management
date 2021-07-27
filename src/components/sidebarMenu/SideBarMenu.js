import React from 'react'
import styles from './SideBarMenu.module.css'

export default function SideBarMenu({mydash, module, exercise, addAsign, announcement, grades }) {
    return (
        <div className={styles.sidebar_menu_container}>
            <div className={styles.sidebar_menu_content}>
                <p>{ mydash }</p>
                <p>{ module }</p>
                <p>{ exercise }</p>
                <p>{ addAsign }</p>
                <p>{ grades }</p>
                <p>{ announcement }</p>
            </div>
        </div>
    )
}
