import React from 'react';
import './courseCard.css';
import './courseInfo';
import CourseInfo from './courseInfo';
import { BrowserRouter as Router, Link } from "react-router-dom";

function CourseCard() {
    return (
        <div className="outer__container">
            <Link to='/course-page'>
                <CourseInfo 
                courseName="HTML"
                numOfLessons={15}
                numOfHours={4}
                numOfTests={2}
                teacherName="Lem Canady"
                skillLevel="Beginner"
                teacherIcon="https://i.insider.com/5e32f2a324306a19834af322?width=2000&format=jpeg&auto=webp"
                />
            </Link>
            <CourseInfo 
            courseName="JavaScript"
            numOfLessons={20}
            numOfHours={8}
            numOfTests={3}
            teacherName="Lem Canady"
            skillLevel="Intermediate"
            teacherIcon="https://i.insider.com/5e32f2a324306a19834af322?width=2000&format=jpeg&auto=webp"
            />
            <CourseInfo 
            courseName="React"
            numOfLessons={36}
            numOfHours={18}
            numOfTests={9}
            teacherName="Lem Canady"
            skillLevel="Advanced"
            teacherIcon="https://i.insider.com/5e32f2a324306a19834af322?width=2000&format=jpeg&auto=webp"
            />
            <CourseInfo 
            courseName="CSS"
            numOfLessons={10}
            numOfHours={5}
            numOfTests={2}
            teacherName="Lem Canady"
            skillLevel="Beginner"
            teacherIcon="https://i.insider.com/5e32f2a324306a19834af322?width=2000&format=jpeg&auto=webp"
            />
            <CourseInfo 
            courseName="Algorithms"
            numOfLessons={15}
            numOfHours={4}
            numOfTests={2}
            teacherName="Lem Canady"
            skillLevel="Beginner"
            teacherIcon="https://i.insider.com/5e32f2a324306a19834af322?width=2000&format=jpeg&auto=webp"
            />
            <CourseInfo 
            courseName="Figma"
            numOfLessons={15}
            numOfHours={4}
            numOfTests={2}
            teacherName="Lem Canady"
            skillLevel="Intermediate"
            teacherIcon="https://i.insider.com/5e32f2a324306a19834af322?width=2000&format=jpeg&auto=webp"
            />
        </div>
    );
}

export default CourseCard;
