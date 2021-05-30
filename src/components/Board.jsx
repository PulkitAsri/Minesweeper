import React ,{ useState,useEffect }from 'react'
import createBoard from '../util/createBoard';
import Cell from './Cell';
import StyledBoard from "./StyledBoard"
import _ from "lodash";
import { printGrid ,printBoard } from "../util/debugging"


const VECTORS=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
const ROW=10;
const COL=10;
const BOMBS=15;

function Board() {
    const [grid,setGrid]= useState([]);
    const [mineLoctions,setMineLocations]= useState([]);

    //FIRST MOUNT
    useEffect(() => {
        //creating a fresh board
        const freshBoard = () => {
            const newBoard=createBoard(ROW,COL,BOMBS);
            setMineLocations(newBoard.mineLocations);
            
            setGrid(newBoard.board);
            // printGrid(newBoard.board,ROW,COL);
        }
        freshBoard();
    }, []);
    

    //Right Click
    const handleUpdateFlag= (e,x,y) =>{
        e.preventDefault(); //avoiding menu 

        let newGrid=[...grid]; //deep copy
        newGrid[x][y].flagged=true;
        setGrid(newGrid);
    }

    //Left Click
    const handleRevealCell = (x,y) =>{

        let newGrid=[...grid]; //deep copy
        revealCell(newGrid,x,y); 
        setGrid(newGrid);
    }

    const revealCell = (arr,x,y) =>{
        
        if(arr[x][y].revealed === true) return;
        arr[x][y].revealed=true;

        //Empty Cell (Khokla)=>
        if(grid[x][y].value === 0){
            return floodReveal(arr,x,y) ;
        }

        //BOOM
        if(arr[x][y].value === "X") {
            //Reveal all mines
            for(let m=0 ; m<mineLoctions.length ; m++){
                arr[mineLoctions[m][0]][mineLoctions[m][1]].revealed=true;
            }
        }
        return arr;
    }


    const floodReveal= (arr,x,y) =>{
        VECTORS.forEach((v)=>{
            let surrX= x + v[0];
            let surrY= y + v[1];

            //valid nieghbour checks=>
            if(surrX >=0 && surrY >=0 
                && surrX < ROW && surrY < COL 
                && arr[surrX][surrY].value!=="X"
                && !arr[surrX][surrY].revealed ){
                
                //for each neighbour
                // +---+---+---+
                // | * | * | * |
                // +---+---+---+
                // | * | X | * |
                // +---+---+---+
                // | * | * | * |
                // +---+---+---+
                //Recursive Call to Reveal them

                arr[x][y].revealed=true;
                return revealCell(arr,surrX,surrY);
            }
        });
    }

    //LOADING 
    if(!grid) 
        return(<div>Loading</div>);

    return(
    <StyledBoard>
        {grid.map((row,r) =>{
            return(
            <div key={r} >
            {row.map((cell,c)=>{
                return(<Cell 
                        key={c} 
                        info={cell} 
                        handleRevealCell={handleRevealCell} 
                        updateFlag={handleUpdateFlag} />);
                })
            }
            </div>);
        })} 
    </StyledBoard>);
}

export default Board;
