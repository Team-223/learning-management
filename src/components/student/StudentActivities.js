import React from 'react'
import { Link } from 'react-router-dom';
import styles from './StudentActivities.module.css';

function StudentActivities({ module }) {
    console.log('module',module)
    return (
        <div className={styles.activities__container} key={module.id}>
            <Link to='/student-module'>
                {console.log('student activities', module)}
            <h1>{module.courseName}</h1>
            <h3>{module.moduleTitle}</h3>
            </Link>
        </div>
    )
}

export default StudentActivities
