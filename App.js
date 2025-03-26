import React from 'react'
import './App.css';
import { useState } from 'react';
import { AiOutlineCarryOut } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

function App() {

const[text,setText]=useState("");
const changeText=(e)=>{
setText(e.target.value);
}

const[obj,setObj]=useState([]);
const box=()=>{
  if(text.trim()!==""){
    setObj(prevObj => [...prevObj, 
    { 
    className: "box-item",
    content:text
  }]);
  setText("");
  }
  
}
const handleKeyDown=(e)=>{
if(e.key==="Enter") box();
};


const deleteBox = (indexToDelete) => {
  setObj(prevObj => prevObj.filter((_, index) => index !== indexToDelete));
};
  return (
    
    <div className="body">
     <nav>
      <div className="title"> MyTodoList
      <AiOutlineCarryOut className='icon'/>
      </div>
      
      </nav> 
      
        
       <div className="main">
       
       <div>
          <input type='text' value={text} onChange={changeText} onKeyDown={handleKeyDown} placeholder='Adj meg egy taskot'></input>
          <button onClick={box}>+</button>
      </div>
        {
        obj.map((item, index) => (
            <div key={index} className={item.className}>
              {index + 1}.{item.content}
              <AiOutlineCheck onClick={()=>deleteBox(index)}/>
              
              </div>
        ))}
            </div>
       </div>
    
  );
}

export default App;
