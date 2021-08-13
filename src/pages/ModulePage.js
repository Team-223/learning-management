import React, {useContext, useEffect} from 'react'
import Header from '../components/header/Header'
import StudentModules from '../components/studentModules/StudentModules'
import styles from './ModulePage.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import { MyContext } from '../Context'

function Module() {
    const { showmodules, teacherModules } = useContext(MyContext);

    useEffect(() => {
        teacherModules();
    },[])
    
    return (
        <div className={styles.module__container}>
            <Header />
            <div className={styles.sidebar__container}>
                <SideBarMenu 
                    mydash='My Dashboard'
                    module='Modules'
                    exercise='Exercises'
                    grades='Student Grades'
                    addAsign='Add Assignments'
                    addAnnouncement='Add Announcement'
                />
            </div>
            <div className={styles.module__pieces}>
            { showmodules && showmodules.map((module) => (
                       
                       <StudentModules module={module} key={module.id}/>
                   ))}
            </div>
        </div>
    )
}

export default Module