import React, { useState } from "react"

const Home=()=>{
    const [inputId,setInputId]=useState("")

    const changeInput=(e)=>{
        setInputId(e.target.value)
    }

    const submitId=()=>{
        console.log("click")
    }

    return(
        <>
            <h1>OP.GG</h1>
            <input type="text" onChange={changeInput} value={inputId} />
            <button onClick={submitId}>확인</button>
        </>
    )
}

export default Home