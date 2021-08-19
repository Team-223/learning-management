import React, {useContext} from 'react'
import Header from '../components/header/Header'
import styles from './Grades.module.css'
import { Container } from '@material-ui/core'
import StudentExercise from '../components/studentModules/StudentExercise'
import TeacherExercise from '../components/teacher/TeacherExercise'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import { MyContext } from '../Context'

function Grades(studentmodule) {
    const { showmodules, teacherModules } = useContext(MyContext);

    return (
        <div className={styles.grades__container}>
            <Header/>
            <div className={styles.sidebar__container}>
                {studentmodule ?
                <Container>
                    <SideBarMenu 
                        studentdash='My Dashboard'
                        studentmodule='Modules'
                        studentexercise='Exercises'
                        grades='My Grades'
                        announcement='Announcement'
                    /> 
                </Container>
                :
                <Container>
                    <SideBarMenu 
                        teacherdash='My Dashboard'
                        teachermodule='Modules'
                        teacherexercise='Exercises'
                        grades='Student Grades'
                        addAsign='Add Assignments'
                        addAnnouncement='Add Announcement'
                    />
                </Container> }
            </div>
            <div className={styles.module__pieces}>
                {studentmodule ? 
             showmodules && showmodules.map((module) => (
                       <StudentExercise module={module.courseName} key={module.id}/>
                   ))
                   :
                   showmodules && showmodules.map((module) => (
                       <TeacherExercise module={module.courseName} key={module.id}/>
                   ))}
            </div>
        </div>
    )
}

export default Grades
