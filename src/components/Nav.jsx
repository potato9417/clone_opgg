import React from "react"
import {Link} from "react-router-dom"

const Nav=()=>{
    return(
        <>
            <Link to="/">HOME</Link>
            <Link to="/champion">CHAMPION</Link>
        </>
    )
}

export default Nav