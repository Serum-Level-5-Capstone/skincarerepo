import React, {useContext, useState} from "react"
import Results from "./Results"
import {Context} from "./DataManager"
export default function MyCart(props) {

    const [serumsArray, setSerumsArray] = useState([])
    const {serums} = useContext(Context)
    console.log(serums)

    
    // const mappedSerums = serums.map(serum => {
    //     return(
    //         <Results 
    //             {...serum}
    //             key={serum.serumId} 
    //          />
    //         )
    //     })

    return (
        <div>
            <h1>Checkout</h1>
            
            { serums.length > 0 ? 
                serums.map(serum => {
                    return(
                        <Results 
                            {...serum}
                            key={serum.serumId} 
                         />
                        )
                    })
                : 
                <> No data found :/ </>
            }   
        </div>
    )

}