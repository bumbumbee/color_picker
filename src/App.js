import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
//import {connect} from 'react-redux'
import Header from './components/layout/Header'
import Home from './components/pages/Home'
import Quiz from './components/pages/Quiz'
import SingleColor from './components/pages/SingleColor'
import QuizSingleColor from './components/pages/QuizSingleColor'
import Statistics from './components/pages/Statistics'
import Login from './components/auth/Login'
import Register from './components/auth/Register'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/register' component={Register}/>
                        <Route exact path='/quiz' component={Quiz}/>
                        <Route exact path='/statistics' component={Statistics}/>
                        <Route  exact path='/colors/:title' component={SingleColor}/>
                        <Route exact path='/quiz/:title' component={QuizSingleColor}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
