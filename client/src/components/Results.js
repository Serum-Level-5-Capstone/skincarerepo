import React from "react"

export default function Results(props){

const {name, tag, description, seasonId, saveSerum} = props
    
    return (
        <div>
            <h2>{name}</h2>
            <p>{tag}</p>
            <p>{description}</p>
            <p>{seasonId}</p>
            <button onClick={saveSerum}>Save Serum</button>
        </div>
    )

}