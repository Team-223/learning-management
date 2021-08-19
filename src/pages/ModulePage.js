import React, {useContext, useEffect} from 'react'
import Header from '../components/header/Header'
import StudentModules from '../components/studentModules/StudentModules'
import TeacherModules from '../components/teacher/TeacherModules'
import styles from './ModulePage.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import { MyContext } from '../Context'
import { Container } from '@material-ui/core'

function Module({studentmodule}) {
    const { showmodules, teacherModules } = useContext(MyContext);

    useEffect(() => {
        teacherModules();
    },[])
    
    return (
        <div className={styles.module__container}>
            <Header />
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
                       <StudentModules module={module.courseName} key={module.id}/>
                   ))
                   :
                   showmodules && showmodules.map((module) => (
                       <TeacherModules module={module.courseName} key={module.id}/>
                   ))}
            </div>
        </div>
    )
}

export default Module