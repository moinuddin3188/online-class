import React from 'react';
import './Body.css';
import Courses from '../Courses/Courses';
import { useState } from 'react';
import faceData from '../../FakeData/fakadata';
import Enrolled from '../Enrolled/Enrolled';


const Body = () => {
    const [courses, setCourse] = useState(faceData);
    const [enroll, setEnroll] = useState([]);
    const handleEnroll = (course) => {
        const newEnroll = [...enroll, course];
        setEnroll(newEnroll);
    }
    return (
        <div className="main-body">
            <div className='enrolled-courses'>
                <Enrolled enroll={enroll}></Enrolled>
            </div>
            <h2 className="title">Courses</h2>
            <div className="courses-container">
                <div className='row'>
                    {
                        courses.map(course => <Courses course={course} handleEnroll={handleEnroll}></Courses>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Body;