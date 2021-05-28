import React ,{ useState,useEffect }from 'react'
import createBoard from '../util/createBoard';
import Cell from './Cell';

function Board() {
    const [grid,setGrid]= useState([]);

    //First Mount
    useEffect(() => {
        //creating a fresh board
        const freshBoard = () => {
            const newBoard=createBoard(10,10,20);
            console.log(newBoard.board);
            setGrid(newBoard.board);
        }
        freshBoard();
    }, []);

    //Right Click
    const updateFlag= (e,x,y) =>{
        e.preventDefault();
        

        let updatedGrid=JSON.parse(JSON.stringify(grid));
        updatedGrid[x][y].flagged=true;
        setGrid(updatedGrid);
    }

    //Left Click
    const revealCell= (e,x,y) =>{
        e.preventDefault();
        if(grid[x][y].value==="X") alert ("Mine Found");

        let updatedGrid=JSON.parse(JSON.stringify(grid));
        updatedGrid[x][y].revealed=true;
        setGrid(updatedGrid);
    }




    if(!grid) return(<div>Loading</div>);
    return(
    <div>
        {grid.map((row,r) =>{
            return(
            <div style={{display:"flex"}} key={r}>
            {row.map((cell,c)=>{
                return(
                <Cell info={cell} revealCell={revealCell} updateFlag={updateFlag} key={c}/>);
                })}
            </div>)
            })
        }
    </div>);

}

export default Board;
