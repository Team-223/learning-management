import React, { useContext } from 'react'
import StudentModules from '../components/studentModules/StudentModules'
import Announcement from '../components/announcement/Announcement'
import styles from './StudentDashboard.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import Filter from '../components/Filter'
import Header from '../components/header/Header'
import { Container } from '@material-ui/core'

import { MyContext } from '../Context';

function StudentDashboard() {

    const { user, gituser , name} = useContext(MyContext)
    return (
            <div className={styles.dashboard__container}>
                <Header />
                {
                    user? 
                        <span>Welcome {user.displayName}</span>
                        :
                        gituser?
                        <span>Welcome {gituser.email}</span>
                        :
                        name?
                        <span>Welcome {name}</span>
                        :
                        ''

                }
                <div className={styles.sidebar__container}>
                    <Container>
                        <SideBarMenu
                            mydash='My Dashboard'
                            module='Module'
                            exercise='Exercise'
                            grades='My Grades'
                            announcement='Announcements'
                        />
                         <Filter />
                    </Container>
                </div>
                <div className={styles.dashboard__modules}>
                    <Announcement />
                    <StudentModules />
                    <StudentModules />
                    <StudentModules />
                    <StudentModules />
                </div>
            </div>
    )
}

export default StudentDashboard
