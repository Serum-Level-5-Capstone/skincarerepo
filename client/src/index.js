import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import Provider from "./components/DataManager"


ReactDOM.render(
    <Router>
        <Provider>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root'));