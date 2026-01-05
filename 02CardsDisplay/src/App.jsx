import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  let [count, setCount] = useState(0)

  const AddValue = ()=>{
    if(count==20){
      return;
    }
    setCount(count + 1)
  }
  
  const SubValue = ()=>{  
    if(count<=0){
      return;
    }
    setCount(count - 1)
  }

  let Deatils_child={
    Name:"Harsh",
    Age:20,
    City:"Delhi"
  }
  return (
    <>
     {/* Chai Aur React
    <h1>Count:{count}</h1>
    <button onClick={AddValue}>Add</button><br></br>
    <button onClick={SubValue}>Sub</button> */}
    <h1 className="bg-blue-500 text-white font-bold -2 px-4 rounded">
      Hello, Tailwind CSS!
    </h1>
    <br/>
    <div className="flex gap-5">
    <Card Name="Harsh" btntxt="click Now"/>
    <Card Name="Sahil" btntxt="Say Hi"/>
    <Card Name="Hemanshu"/>
    <Card Name="krish ka ganna sunega" btntxt="Listen Now"/>
    <Card Name="amandeep" btntxt="Talk Now"/>
    <Card Name="gaurav" btntxt="Buy Now"/>
    </div></>
  )}

export default App
