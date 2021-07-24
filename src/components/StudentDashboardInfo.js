import React from 'react';

function StudentDashboardInfo({ courseName, numOfLessons, numOfHours, numOfTests }) {
    return (
        <div className="main__course__container">
            <div className="course__container">
                <div className="upper__container">
                    {courseName}
                </div>
                <div className="lower__container">
                    <div className="course__stats">
                        {numOfLessons} Lessons | {numOfHours} Hours | {numOfTests} Tests
                    </div>
                    <div className="progress__container">
                        <div className="progress__bar"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboardInfo;
