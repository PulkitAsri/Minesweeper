import React from 'react'
import StyledHeading from "./StyledHeading"

const style={
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    background:"black",
    borderRadius:10,
    position:"absolute",
    color:"white"}

function GameOverModel(props) {
    return (
        <div style={style}>
            <StyledHeading>
                GameOver
            </StyledHeading>
            <button onClick={props.tryAgainClicked}style ={{margin:10,background:"maroon",borderRadius:10}}>Try Again</button>
        </div>
    )
}

export default GameOverModel
