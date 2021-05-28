import React from 'react'

function Cell({info}) {
    return (
        <div style={style.cellStyle}
        onClick={()=>console.log(info)}
        >
            <span>{info.value + "\t"}</span>
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
        background:"yellow",
        border: "2px solid"
    }

}

export default Cell
