import React from 'react';

function CourseInfo({ courseName, numOfLessons, numOfHours, numOfTests, skillLevel, teacherName, teacherIcon }) {
    return (
        <div className="course__card">
            <div className="upper__container">
                {courseName}
            </div>
            <div className="lower__container">
                <div className="course__stats">
                    {numOfLessons} Lessons | {numOfHours} Hours | {numOfTests} Tests
                </div>
                <div className="teacher__name">
                    by {teacherName}
                </div>
                <div className="info__container">
                    <div className="skill__level">
                        {skillLevel}
                    </div>
                    <div className="teacher__picture">
                        <img src={teacherIcon} alt="teacher icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseInfo;