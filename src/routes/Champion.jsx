import React from "react"
import Axios from "axios"

class Champion extends React.Component{
    state={
        champion:[],
        isLoading:true
    }

    setChampion(){
        const data = Axios.get("http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/champion.json")

        console.log(data)
        this.setState({isLoading:false})
    }

    componentDidMount(){
        this.setChampion()
    }

    render(){
        const {isLoading}=this.state
        if(isLoading){
            return(
                <>
                    <h2>Loading...</h2>
                </>
            )
        }
        else{
            return(
                <>
                    <h2>Champion</h2>
                </>
            )
        }
    }
}

export default Champion