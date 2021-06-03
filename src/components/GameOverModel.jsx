import React ,{useState}from 'react'
import StyledHeading from "./StyledHeading"



function GameOverModel(props) {
    

    const style={
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        width: 300,
        height:240
    }

    return (
        <div style={style} className="p-2 card">
            <div>
                <h3 
                className="p-4" >
                {props.win?"🎊🎉WUHHOO🎉🎊":"💢Oops!💢"}
                </h3>
                <div class="col-md-12 text-center">
                    <button 
                    className="p-1 btn btn-lg btn-danger " 
                    onClick={props.tryAgainClicked} 
                    >
                    {props.win?"Play Again":"Try Again"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GameOverModel
// style ={{margin:10,background:"maroon",borderRadius:10}}