import React from 'react'
import StyledHeading from "./StyledHeading"

const style={
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    width: "21rem",
    height:"21rem"
}

function GameOverModel(props) {
    return (
        <div style={style} className="p-4 card">
            <h1 >{props.win?"🎊🎉WUHHOO🎉🎊":"💢Oops!💢"}</h1>
            <button className="p-1 btn btn-lg btn-danger " onClick={props.tryAgainClicked} >{props.win?"Play Again":"Try Again"}</button>
        </div>
    )
}

export default GameOverModel
// style ={{margin:10,background:"maroon",borderRadius:10}}