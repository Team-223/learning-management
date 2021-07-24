import React from 'react';
import StudentDashboardInfo from './StudentDashboardInfo';
import './StudentDashboard.css';

function StudentDashboard() {
    return (
        <div className="main__container">
            <div className="header">
                <div className="logo">
                    <img src="images/company-logo.png" alt="company logo" />
                </div>
                <div className="welcome">
                    Welcome Student!
                </div>
                <div className="settings">
                    <img src="images/settings.png" alt="settings icon" />
                </div>
                <div className="logout">
                    <img src="images/login-btn.svg" alt="logout button" />
                </div>
            </div>
            <div className="course__dashboard">
                <div className="left__side">
                    <div className="sidebar">
                        <div className="links">
                            <ul>
                                <li>Modules</li>
                                <li>Exercises</li>
                                <li>My Notes</li>
                                <li>My Grades</li>
                                <li>Announcements</li>
                            </ul>
                        </div>
                        <div className="filter">
                            <ul>
                                <li>Filter</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="line__break"></div>
                <div className="right__side">
                    <div className="announcements">
                        No announcments currently!
                    </div>
                    <div className="courses__container">
                        <StudentDashboardInfo
                            courseName="HTML"
                            numOfLessons={15}
                            numOfHours={4}
                            numOfTests={2}
                        />
                        <StudentDashboardInfo
                            courseName="JavaScript"
                            numOfLessons={20}
                            numOfHours={8}
                            numOfTests={3}
                        />
                        <StudentDashboardInfo
                            courseName="React"
                            numOfLessons={36}
                            numOfHours={18}
                            numOfTests={9}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;
