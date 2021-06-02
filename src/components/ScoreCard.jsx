import React from 'react'

function ScoreCard(props) {
    return (
        <div style={{display:"flex",alignItems:'center',justifyContent:"center",color:'white'}}>
        <h3>🚩{props.flagsLeft} 🚩</h3>    
        </div>
    );
}

export default ScoreCard
