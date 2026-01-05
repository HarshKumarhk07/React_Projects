import React from "react";

function useCounter(intialValue=0){
    const [count,setCount]=React.useState(intialValue);

    const increment=()=>{
        setCount(count+1);
    };

    const decrement=()=>{
        setCount(count-1);
    }

    const reset =()=>{
        setCount(intialValue);
    };
    return {count,increment,decrement};
}