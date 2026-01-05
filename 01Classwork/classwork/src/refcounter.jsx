import react ,{useRef} from 'react';

function RefCounter(){
    const ref = useRef(0);
    const handler=()=>{
        setcount(count+1);
    };
    const handler2=()=>{
        ref.current = ref.current+1;
        console.log(ref.current);
    };
    return (
        <>
        <div className="flex flex-col justify-center">
        <h1 className="font-bold text-black">{count}</h1>
        <h1 className="font-bold text-black">{ref.counter}</h1>
        </div>
        <button class="bg-blue-400 border-2 m-1.5 rounded-2x1"
        onClick={handler}>
            btn1
        </button>


        <button class="bg-blue-400 border-2 m-1.5 rounded-2x1"
        onClick={handler}>
            btn1
        </button>
        </>
    )
}