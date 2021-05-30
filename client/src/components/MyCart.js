import React from "react"

export default function MyCart(props) {

    const {serums, serumId } = props

    const mappedSerums = serums.map(serum => (<Serum {...serum} key={serum.serumId} />))
    return (
        <div>
            <h1>Checkout</h1>
            {mappedSerums}
        </div>
    )

}