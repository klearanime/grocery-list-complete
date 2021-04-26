import React, { useContext } from 'react'
import { GroceryContext } from "./context/context"



function List() {
    const {
        listItem: { id, items, isDone },
        handleDoneByID, handleDeleteByID,
    } = useContext(GroceryContext)
    return (
        <div>
            <span style={{ textDecoration: isDone ? "line-through" : "" }}>{items} </span>
            <button onClick={() => handleDoneByID(id)}>Done</button>
            <button onClick={() => handleDeleteByID(id)}>Delete</button>
        </div>
    )
}



export default List
