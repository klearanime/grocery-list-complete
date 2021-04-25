import React, { useState, useContext } from 'react'
import { GroceryInputContext } from "./context/context"


const GroceryInput = () => {
    const { addGrocery } = useContext(GroceryInputContext)
    const [items, setItems] = useState("")

    function handleListSubmit(event) {
        event.preventDefault()

        addGrocery(items)
    }

    return (
    <form onSubmit={handleListSubmit}>
        <input type="text" value={items} onChange={(e) => setItems(e.target.value)}/>
        <button type="submit">Add To List</button>
    </form>
    )
}



export default GroceryInput