import React, { useState } from 'react';
import ToDolist from './ToDolist';
import './App.css';

function App() {

  const [inputList, setInputList] = useState();
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);

  }
  const listOfItem = () => {
    setItem((oldlist) => {
      return [...oldlist, inputList]
    });
    setInputList("");
  }
  const deleteItem = (id) =>{
    setItem((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      })
    })

  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent} />
          <button onClick={listOfItem}>+</button>
          <ol>
            {item.map((itemval,index) => {
              return <ToDolist 
                        text={itemval} 
                        key={index}
                        id={index}
                        onSelect = {deleteItem}
                        />
            })}
          </ol>
        </div>

      </div>
    </>
  );
}

export default App;
