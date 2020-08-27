import React from 'react';
import './Enrolled.css';

const Enrolled = (props) => {
    const enrolledCorses = props.enroll;
    const total = enrolledCorses.reduce((total, course) => total + course.price, 0);
    const totalPrice = total.toFixed(2);
    return (
        <div className="courses-taken">
            <h3>Enrolled Courses {enrolledCorses.length}</h3>
            <div className="row">
                <div className="col-md-8">
                    {
                        enrolledCorses.map(course => 
                            <div className="row">
                                <div className="col-md-1">
                                    <div className="side-box"></div>
                                </div>
                                <div className="col-md-7">
                                    <h5>{course.title} </h5>
                                    <p>Price {course.price} </p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="col-md-2">
                    <h5 style={{color: "#ec0086"}}>Total price <br/>{totalPrice}</h5>
                </div>
                <div className="col-md-2">
                    <button className="btn confirm-btn">CONFIRM</button>
                </div>
            </div>
        </div>
    );
};

export default Enrolled;