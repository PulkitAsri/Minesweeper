import React from 'react'
import valueColor from "../util/valueColor"
import "../App.css"

function Cell({info,updateFlag,handleRevealCell}) {
    const style={
        background: info.revealed ? "silver" :"grey",
        color: valueColor(info.value)
    }

    return (
        <div 
        style={style}
        className="cellStyle"
        onClick={(e)=>handleRevealCell(e,info.x,info.y) }
        onContextMenu={(e)=>updateFlag(e,info.x,info.y)}
        >
            <span>{ info.revealed ? (info.value!==0)&&info.value :"" }</span>
        </div>
        );
}


export default Cell
