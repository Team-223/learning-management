import React from 'react'
import styles from './StudentExercise.module.css';
function StudentExercise() {
    return (
        <div className={styles.exercise__container}>

            <div className={styles.exercise__row}>
                <img className={styles.exercise__icon} src='/images/exercises-logo.png' alt='ex-logo' />
                <span className={styles.exercise__title}>Exercise 1 Tilte</span>
            </div>

        </div>
    )
}

export default StudentExercise
