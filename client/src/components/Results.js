import React, { useContext } from "react"
import { Context } from "./DataManager"

export default function Results(props){

const { serum } = useContext(Context)

    const handleSave = () => {
        
        let serumsArray = []

        const serumObj = {
            name: serum.name,
            tag: serum.tag,
            description: serum.description,
            season: serum.season,
            image: serum.image
        }
        serumsArray.push(serumObj)
    }

// const {name, tag, description, seasonId, saveSerum} = props
    
    return (
        <div>
            <h2>{serum.name}</h2>
            <p>{serum.tag}</p>
            <p>{serum.description}</p>
            <p>{serum.season}</p>
            <img url="" alt="Serum Image">{serum.image}</img>
            <button onClick={handleSave}>Save Serum</button>
        </div>
    )

}