
import React, { useState} from "react"

export const Context = React.createContext()

export default function DataManager(props) {
    const [serums, setSerums] = useState([])

    // Get all
    // function getSerums() {
    //     axios.get("/serums")
    //         .then(res => setSerums(res.data))
    //         .catch(err => console.log(err))
    // }

    return (
        <Context.Provider value={{
            serums,
            setSerums,

        }}>
            {props.children}
        </Context.Provider>
    )
}