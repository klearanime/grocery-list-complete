import React, { useEffect, useState } from "react"
import GroceryInput from "./GroceryInput"
import List from "./List"
import { GroceryInputContext, GroceryContext } from "./context/context"

import "./App.css"



let listObj = [
  {
    id: 1,
    items: "milk",
    isDone: false,
  },
  {
    id: 2,
    items: "bread",
    isDone: false,
  },
]

function App() {
  const [listArray, setListArray] = useState(listObj)

  function addGrocery(items) {
    console.log(items);
  }

  function showListInput() {
    return (
      <GroceryInputContext.Provider value={{ addGrocery }}>
        <GroceryInput />
      </GroceryInputContext.Provider>
    )
  }

  function showItem() {
    return listArray.map((item) => {
      return (
        <GroceryContext.Provider 
        key={item.id} value={{listItem: item}}>
          <List />
        </GroceryContext.Provider>
      )
    })
  }

  return (
    <div>
      <h1 className="name">Grocery List Completed</h1>
      <div className="App">
        {showListInput()}
        {showItem()}
      </div>
    </div>
  );
}



export default App;