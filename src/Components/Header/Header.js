import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="container header">
                <h1>Grow Your <span style={{color: "#ec008c"}}>Skills</span></h1>
                <h1>With us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis <br/> sint deserunt magni aperiam blanditiis tempore commodi sequi optio <br/> cumque facere enim, animi alias deleniti molestias aspernatur amet <br/> minus repudiandae adipisci.</p>
                <button className="btn get-started-btn">GET STARTED</button>
            </div>
        </div>
    );
};

export default Header;