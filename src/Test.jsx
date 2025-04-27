import React,{useState, useEffect} from "react";
const Test =()=>{

    const[count , setCount] = useState(0);
    const[msg , setMsg] = useState('');

    const handleIncrement =()=>{
        setCount(count+1);
    }

    const handleReset =()=>{
        setCount(0);
    }

    useEffect(()=>{
        setMsg("count got updated with"+ count)
        return ()=>{};
    }, [count]);

    return (<div>
        <h1>{count}</h1><button onClick={handleIncrement}>Increment</button><br></br><button onClick={handleReset}>Reset</button><br></br><p>{msg}</p>
    </div>);
}
export default Test;