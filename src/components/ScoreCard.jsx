import React from 'react'

function ScoreCard(props) {
    return (
        <div style={{display:"flex",alignItems:'center',justifyContent:"center",color:'white'}}>
        <h1>🚩{props.flagsLeft} 🚩</h1>    
        </div>
    );
}

export default ScoreCard
