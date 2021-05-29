import React from 'react'
import valueColor from "../util/valueColor"
import mineColor from "../util/mineColor"
import "../App.css"

function Cell({info,updateFlag,handleRevealCell}) {
    const style={
        background: info.revealed ? (info.value ==="X" ? mineColor() :"silver") :"grey",
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
