import React from 'react'

function Cell({info,updateFlag,handleRevealCell}) {
    return (
        <div 
        style={style.cellStyle}
        onClick={(e)=>handleRevealCell(e,info.x,info.y) }
        onContextMenu={(e)=>updateFlag(e,info.x,info.y)}
        >
            <span>{ info.revealed ? (info.value!==0)&&info.value :"" }</span>
        </div>
        );
}

const style={
    cellStyle:{
        width: 40,
        height: 40,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"lightgrey",
        border: "2px solid"
    }

}

export default Cell
