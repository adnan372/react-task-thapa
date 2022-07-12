import React , {useState}  from 'react'

const IncNum = () => {
    const [count,setCount] = useState(0);
    
    const IncPlus = () => {
        setCount(count+ 1) ;
        console.log("clicked")

    }

    const DecPlus = () => {
        setCount(count - 1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={IncPlus}>INCREMENT</button>
        <button onClick={DecPlus}>DECREMENT</button>

    </div>
  )
}

export default IncNum