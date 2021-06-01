import React from 'react'

function StyledSelector(props) {
    return (
        <div style={{display:"flex",alignItems:'center',justifyContent:"center",padding:20}}>
            <select
                defaultValue={props.defaultValue}
                onChange={(e)=>props.handleChangeLevel(e)}
            >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
    );
}

export default StyledSelector
