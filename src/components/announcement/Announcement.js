import React from 'react'
import styles from './Announcement.module.css';

function Announcement( {alert} ) {
    return (
        <div className={styles.announcement__container} key={alert.id}>
            <span>{alert.announcement}</span>
        </div>
    )
}

export default Announcement
