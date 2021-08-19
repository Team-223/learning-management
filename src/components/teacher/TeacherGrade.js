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
                <Container>
                    <SideBarMenu 
                        teacherdash='My Dashboard'
                        teachermodule='Modules'
                        teacherexercise='Exercises'
                        grades='Student Grades'
                        addAsign='Add Assignments'
                        addAnnouncement='Add Announcement'
                    />
                </Container>
            </div>
        </div>
    )
}

export default TeacherGrade
