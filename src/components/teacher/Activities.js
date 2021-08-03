import React from 'react'
import styles from './Activities.module.css'
import moment from "moment";

const Activities = ({ module }) => {
    return (
        <div className={styles.activities} key={module.id} >
            <h2>{module.moduleTitle}</h2>
            <h3>{moment(module.created_at).fromNow()}</h3>
        </div>
    )
}

export default Activities
