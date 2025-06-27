import { useState } from "react"

export default function Counter2(){

    const [count2, setCount]= useState(0);
    const handleAdd = () => {
        const newcount2= count2 + 1;
        setCount(newcount2)
    }
    const handlereduce = () =>{
        const newcount2 = count2 - 1;
        setCount(newcount2)
    }
    return(
        <div style={{border:'2px solid goldenrod',marginBottom:'10px ',padding:'25px'}}>
            <h2>Counter2: {count2}</h2>
            <button style={{marginRight: '5px'}} onClick={handleAdd}>Add</button>
            <button onClick={handlereduce}>Reduce</button>
        </div>
    )
}