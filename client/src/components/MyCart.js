import React, {useState} from "react"
import Results from "./Results"

export default function MyCart(props) {

    const [serumsArray, setSerumsArray] = useState([])

    const mappedSerums = serums.map(serum => (<Results {...serum} key={serum.serumId} />))
    return (
        <div>
            <h1>Checkout</h1>
            {mappedSerums}
        </div>
    )

}