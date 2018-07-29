import React from 'react';
import {Link} from 'react-router-dom'

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <h2>log<span>i</span>n</h2>
                <form>
                    <input type="text"
                           placeholder="email"/>
                    <input type="password"
                           placeholder="password"/>
                    <button>login</button>
                </form>
                <h4>not a member? Register <Link to={'/register'}><span>here</span></Link></h4>
            </div>
        );
    }
}

export default Login