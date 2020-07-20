import React from "react"
import UserInfo from "../components/UserInfo"
import LeagueInfo from "../components/LeagueInfo"
import GameList from "../components/GameList"

const Detail=()=>{
    return(
        <>
            <h2>Detail</h2>
            <UserInfo />
            <LeagueInfo />
            <GameList />
        </>
    )
}

export default Detail