import React, { useContext } from 'react'
import Header from '../components/header/Header'
import styles from './AnnouncementPage.module.css'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import { Container } from '@material-ui/core'
import { MyContext } from '../Context'
import Announcement from '../components/announcement/Announcement'

function AnnouncementPage() {
    const { user, showAnnouncemets } = useContext(MyContext);
    
    return (
        <div className={styles.AnnouncementPage__container}>
            <Header />
            <div className={styles.sidebar__container}>
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
            <div className={styles.AnnouncementPage__announce}>
                {user?<span className={styles.user}>Welcome {user.displayName}</span>:''}

                {showAnnouncemets && showAnnouncemets.map((alert)=> (
                    <Announcement alert={alert} key={alert.id} />
                ))}
            </div>
        </div>
    )
}

export default AnnouncementPage
