import axios from "axios"
import React, { useState, useEffect } from "react"

export const Context = React.createContext()

export default function DataManager(props) {
    const [serums, setSerum] = useState([])

    const getSerum = () => {
        axios.get("/serums")
          .then(res => setSerum(res.data))
          .catch(err => console.log(err))
      }
    
      const saveSerum = (savedSerum) => {
        axios.post("/my-cart", savedSerum)
          .then(res => {
            setSerum(prevSerum => [...prevSerum, res.data])
          })
          .catch(err => console.log(err))
      }

    useEffect(() => {

        getSerum()

    }, [])

    return (
        <Context.Provider value={{
            serums,
            setSerum,
            getSerum,
            saveSerum
        }}>
            {props.children}
        </Context.Provider>
    )
}