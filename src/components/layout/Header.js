import React from 'react';
import {Link} from 'react-router-dom'
//import {connect} from 'react-redux'

const Header = (props)=>{
    return (
        <header>
            <nav>
                <div className="left">
                    <Link className="home" to="/">Home</Link>
                    <Link className="quiz" to="/quiz">Quiz</Link>
                </div>
                <div className="right">
                    <Link className="login" to="/login">Login</Link>
                    <Link className="stats" to="/statistics">Statistics</Link>
                </div>
            </nav>
        </header>
    );
};
export default Header