import React from 'react'
import valueColor from "../util/valueColor"
import mineColor from "../util/mineColor"
import StyledCell from './StyledCell'



function Cell({info,updateFlag,handleRevealCell,gameLevel,cellSize}) {
    const style={
        background: info.revealed ? (info.value ==="X" ? mineColor() :"silver") :"grey",
        color: valueColor(info.value),
        width:cellSize,
        height:cellSize
    } 

    return (
        <StyledCell
            style={style}
            onClick={()=>handleRevealCell(info.x,info.y) }
            onContextMenu={(e)=>updateFlag(e,info.x,info.y)}
            >
            { 
                info.revealed 
                ?(info.value==="X")
                    ?"π£"
                    :(info.value!==0)&&info.value 
                :(info.flagged)
                    ?"π΄"
                    :""      
            }
        </StyledCell>
        );
}
// possoible Emojisπ―πΉπ§¨π£βοΈππβ¨οΈπ’ππ΄π₯π©β³οΈ

export default Cell
