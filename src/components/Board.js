import React ,{ useState,useEffect }from 'react'
import createBoard from '../util/createBoard';
import Cell from './Cell';

function Board() {
    const [grid,setGrid]= useState([]);

    //First Mount
    useEffect(() => {
        //creating a fresh board
        const freshBoard = () => {
            const newBoard=createBoard(5,5,10);
            console.log(newBoard);
            setGrid(newBoard);
        }
        freshBoard();
    }, []);

    if(!grid.board) return(<div>Loading</div>);

    return(
    <div>
        {grid.board.map((row) =>{
            return(
            <div style={{display:"flex"}}>
            {row.map((cell)=>{
                return(
                <Cell info={cell} />);
                })}
            </div>)
            })
        }
    </div>);

    
}

export default Board;
