import React ,{ useState,useEffect }from 'react'
import createBoard from '../util/createBoard';

function Board() {
    const [grid,useGird]= useState([]);

    //First Mount
    useEffect(() => {
        //creating a fresh board
        const freshBoard = () => {
            const newBoard=createBoard(5,5,10);
            console.log(newBoard);
        }
        freshBoard();
    }, [])


    return (
        <div>
            <h1>Board</h1>
        </div>
    )
}

export default Board;
