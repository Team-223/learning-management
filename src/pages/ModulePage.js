import React, {useContext, useEffect} from 'react'
import Header from '../components/header/Header'
import StudentModules from '../components/studentModules/StudentModules'
import TeacherModules from '../components/teacher/TeacherModules'
import styles from './ModulePage.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import { MyContext } from '../Context'
import { Container } from '@material-ui/core'

function Module() {
    const {user, showmodules, teacherModules } = useContext(MyContext);

    useEffect(() => {
        teacherModules();
    },[])
    console.log('blah, blah', user)
    return (
        <div className={styles.module__container}>
            <Header />
            <div className={styles.sidebar__container}>
                {/* {teacherModules ?
                <Container>
                    <SideBarMenu 
                        teacherdash='My Dashboard'
                        teachermodule='Modules'
                        teacherexercise='Exercises'
                        teachergrades='Student Grades'
                        addAsign='Add Assignments'
                        addAnnouncement='Add Announcements'
                    />
                </Container> 
                : */}
                <Container>
                    <SideBarMenu 
                        studentdash='My Dashboard'
                        studentmodule='Modules'
                        studentexercise='Exercises'
                        studentgrades='My Grades'
                        announcement='Announcements'
                    /> 
                </Container>

            </div>
            <div className={styles.module__pieces}>
                {/* {teacherModules ? 
                 showmodules && showmodules.map((module) => (
                     <TeacherModules module={module.courseName} key={module.id}/>
                 )): */}
             {showmodules && showmodules.map((module) => (
    
                       <StudentModules module={module} key={module.id}/>
                   ))}
            </div>
        </div>
    )
}

export default Module