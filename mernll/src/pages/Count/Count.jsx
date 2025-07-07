import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Count = () => {
    // let Count = 5;
    // Count = Count +1

    const navigate =useNavigate()
    const [Count, setCount] = useState(0);
    const [trial, setTrial] = useState(0);

    useEffect(() => {
        alert("use effect is running")
    }, [trial])
    
    const Sum = () =>{
        
        setCount(Count+1)
        setTrial(trial+1)
        console.log (Count);
    }

    const Sub = () =>{

        setCount(Count-1)
        setTrial(trial-1)
        console.log (Count)
    }

    const handleClick = () =>{
        navigate('/')
    }
  return (
    <div>
        <div><h1>The value of count is {Count}</h1></div>
        <div><h1 onClick={Sum}>Add count + </h1></div>
        <div><h1 onClick={Sub}>Sub count - </h1></div>

        <div><h1 onClick={handleClick}>Go to Home</h1></div>
    </div>
  )
}

export default Count