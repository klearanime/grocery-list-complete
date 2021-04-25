import React, { useContext } from 'react'
import { GroceryContext } from "./context/context"



function List() {
    const {
        listItem: { id, items },
    } = useContext(GroceryContext)
    return (
        <div>
            {items}
            <button>Done</button>
            <button>Delete</button>
        </div>
    )
}



export default List
