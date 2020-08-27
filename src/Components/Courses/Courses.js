import React from 'react';
import './Courses.css';

const Courses = (props) => {
    const {title, price, instructor, img} = props.course;
    return (
        <div className="col-md-3 course">
            <div className="card" style={{width: "18rem", height: "450px"}}>
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className='description'>Lorem ipsum dolor sit amet ctetur, adipisicing.</p>
                    <div className="course-info">
                        <p>by {instructor}.</p>
                        <p className='price'>Price ${price}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <a href="#" className="btn btn-enrol" onClick={() => props.handleEnroll(props.course)}>ENROLL NOW</a>
                </div>
            </div>
        </div>
    );
};

export default Courses;