import React from 'react'
import SideBarMenu from '../components/sidebarMenu/SideBarMenu'
import styles from './AddAssignment.module.css'
import AddModule from '../components/upload/AddModule'
import Header from '../components/header/Header'
import { Container } from '@material-ui/core'

function AddAssignement() {
    return (
        <div className={styles.assignment__container}>
            <Header />
            <div className={styles.sidebar__container}>
                <Container>
                    <SideBarMenu 
                        teacherdash='My Dashboard'
                        teachermodule='Modules'
                        teacherexercise='Exercises'
                        teachergrades='Student Grades'
                        addAsign='Add Assignments'
                        addAnnouncement='Add Announcement'
                    />
                </Container>
            </div>
            <div className={styles.add__Assignement}>
                <AddModule />
            </div>
        </div>
    )
}

export default AddAssignement
