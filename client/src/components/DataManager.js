import axios from "axios"
import React, { useState, useEffect } from "react"

export const Context = React.createContext()

export default function DataManager(props) {
    const [serums, setSerums] = useState([])

    // Get all
    function getSerums() {
        axios.get("/serums")
            .then(res => setSerums(res.data))
            .catch(err => console.log(err))
    }

    return (
        <Context.Provider value={{
            serums,
            setSerums,
            getSerums

        }}>
            {props.children}
        </Context.Provider>
    )
}