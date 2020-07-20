import React, { useState } from "react"
import Detail from "./Detail"


const Home=()=>{
    const [inputId,setInputId]=useState("")
    const [checkId,setCheckId]=useState(false)

    const changeInput=(e)=>{
        setInputId(e.target.value)
    }

    const submitId=()=>{
        console.log("click")
        setCheckId(true)
    }

    return(
        <>
            {checkId
            ? <div>
                <Detail />
            </div>
            : <div>
                <h1>OP.GG</h1>
                <input type="text" onChange={changeInput} value={inputId} />
                <button onClick={submitId}>확인</button>
            </div>
            }
        </>
    )
}

export default Home