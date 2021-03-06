import React from "react"
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home"
import MyCart from "./MyCart"


export default function NavBar() {

    return (
        <div className="navbar">
            <nav>
                <Link to="/" style={{ textDecoration: 'none', padding: "20px"}}>Home</Link>
                <Link to="/my-cart" style={{ textDecoration: 'none'}}>Shopping Cart</Link>
            </nav>

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/my-cart"><MyCart /></Route>
            </Switch>
        </div>
    )
}