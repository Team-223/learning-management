import React from 'react'
import styles from './StudentActivities.module.css';

function StudentActivities({ modules }) {
    return (
        <div className={styles.activities__container} key={modules.id}>
            <h1>{modules.courseName}</h1>
            <h3>{modules.moduleTitle}</h3>
        </div>
    )
}

export default StudentActivities
