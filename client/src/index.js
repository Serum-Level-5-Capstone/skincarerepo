import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Context } from "./components/DataManager"


ReactDOM.render(
    <Router>
        <Context.Consumer>
            <App />
        </Context.Consumer>
    </Router>,
    document.getElementById('root'));