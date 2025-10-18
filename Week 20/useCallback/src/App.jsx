import React, { useState,useCallback } from "react";
import ItemList from "./ItemList";

const App = () => {
  console.log("Rendering Parent.... ");
  
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);


  const handleDelete = useCallback((id) => {
      setItems(items.filter((item) => item.id !== id));
    },[items])
    

  return (
    <div>
      <h2>Item List</h2>
      <ItemList items={items} onDelete={handleDelete} />

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </div>
  );
};

export default App;