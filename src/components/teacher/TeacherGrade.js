import React from 'react'
import { MyContext } from '../../Context'
import Header from '../header/Header'
import styles from './TeacherGrades.module.css'
import { Container } from '..Context'

function TeacherGrade() {
    const { user, showGrades } = useContext(MyContext)
    return (
        <div className={styles.teacherGrade__container}>
            <Header/>
            <div className={styles.sidebar__container}>
            </div>
        </div>
    )
}

export default TeacherGrade
