import {useState} from 'react';
import './App.css';

function App(){
  const [color, setcolor] =useState("black")
  return(
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0 gap-4 ">
        <div className="flex flex-wrap justify-center rounded p-6" style={{backgroundColor: "red"}}>
          <button onClick={()=>{ setcolor("red")}}>Red</button>
        </div>

         <div className="flex flex-wrap justify-center rounded p-6" style={{backgroundColor: "green"}}>
          <button onClick={()=>{ setcolor("green")}}>Green</button>
        </div>

         <div className="flex flex-wrap justify-center rounded p-6" style={{backgroundColor: "yellow"}}>
          <button onClick={()=>{ setcolor("yellow")}}>Yellow</button>
        </div>

         <div className="flex flex-wrap justify-center rounded p-6" style={{backgroundColor: "olive"}}>
          <button onClick={()=>{ setcolor("olive")}}>Olive</button>
        </div>

         <div className="flex flex-wrap justify-center rounded p-6" style={{backgroundColor: "blue"}}>
          <button onClick={()=>{ setcolor("blue")}}>Blue</button>
        </div>

         <div className="flex flex-wrap justify-center rounded p-6" style={{backgroundColor: "white"}}>
          <button onClick={()=>{ setcolor("black")}}>Black</button>
        </div>

        <div className="flex flex-wrap justify-center rounded p-6" style={{backgroundColor: "Pink"}}>
          <button onClick={()=>{ setcolor("pink")}}>pink</button>
        </div>
      </div>
    </div>
  )
}

export default App;