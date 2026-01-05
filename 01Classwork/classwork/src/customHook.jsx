import React,{use} from "react";
import { useReducer } from "react";

function CounterR(){
    const [state,dispatch]=useReducer((state,action)=>{
        switch(action.type){
            case 'increment':
                return {count:state.count+1};
            case 'decrement':
                return {count:state.count-1};
            default:
                return state;
        }   
    },{count:0});

    return(
        <>
        <div className="flex flex-col justify-center">
        <h1 className="font-bold text-black">{state.count}</h1>
        </div>
        <button class="bg-blue-400 border-2 m-1.5 rounded-2x1"
        onClick={()=>dispatch({type:'increment'})}>
            Increment
        </button>
        <button class="bg-blue-400 border-2 m-1.5 rounded-2x1"
        onClick={()=>dispatch({type:'decrement'})}>
            Decrement
        </button>
        </>
    )
}