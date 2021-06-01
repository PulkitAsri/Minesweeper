import React ,{ useState,useEffect }from 'react'
import createBoard from '../util/createBoard';
import Cell from './Cell';
import BorderWrapper from "./BorderWrapper"
import _ from "lodash";

import ScoreCard from './ScoreCard';

const VECTORS=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
const LEVELS={
    EASY:{
        ROW:5,
        COL:5,
        BOMBS:5
    },
    MEDIUM:{
        ROW:12,
        COL:12,
        BOMBS:30
    },
    HARD:{
        ROW:15,
        COL:15,
        BOMBS:40
    }
}



function Board() {
    const [grid,setGrid]= useState([]);
    const [mineLoctions,setMineLocations]= useState([]);
    const [gameLevel,setGameLevel]=useState(LEVELS.MEDIUM);
    const [noOfFlags,setNoOfFlags]=useState(gameLevel.BOMBS);
    
    //Whenever GameLevel Changes
    useEffect(()=>{
        freshBoard();

    },[gameLevel]);

//TASK==> change state when selector changes ==> test ==> try to seperate out Select => Styling

    
    //NEW BOARD
    const freshBoard = () => {
        const newBoard=createBoard(gameLevel.ROW,gameLevel.COL,gameLevel.BOMBS);
        setMineLocations(newBoard.mineLocations);
        setNoOfFlags(gameLevel.BOMBS);
        setGrid(newBoard.board);
        // printGrid(newBoard.board,gameLevel.ROW,gameLevel.COL);
    }

    //OPERATIONS

    //Right Click
    const handleUpdateFlag= (e,x,y) =>{
        e.preventDefault(); //avoiding menu 

        let newGrid=[...grid]; //deep copy
        if(newGrid[x][y].flagged){
            setNoOfFlags(noOfFlags+1);
        }else{
            setNoOfFlags(noOfFlags-1);
        }
        newGrid[x][y].flagged=!newGrid[x][y].flagged;
        setGrid(newGrid);

    }

    //Left Click
    const handleRevealCell = (x,y) =>{
        let newGrid=[...grid]; //deep copy

        //avoid the click on flagged cells
        if(newGrid[x][y].flagged){ 
            newGrid[x][y].flagged=false;
            setNoOfFlags(noOfFlags+1);

        }else{
           revealCell(newGrid,x,y);  
        }

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
                && surrX < gameLevel.ROW && surrY < gameLevel.COL 
                && arr[surrX][surrY].value!=="X"
                && !arr[surrX][surrY].revealed ){
                    
                arr[x][y].revealed=true;

                //since its been revealed ,definitely not a mine 
                if(arr[x][y].flagged){
                    arr[x][y].flagged=false;
                    setNoOfFlags(noOfFlags+1);
                }
                
                
                //Now for each neighbour
                // +---+---+---+
                // | * | * | * |
                // +---+---+---+
                // | * | X | * |
                // +---+---+---+
                // | * | * | * |
                // +---+---+---+
                //Recursive Call to Reveal them

                return revealCell(arr,surrX,surrY);
            }
        });
    }

    const handleChangeLevel=(e)=>{
        switch(e.target.value){
            case "easy": 
                setGameLevel(LEVELS.EASY);
                break;
            case "medium":
                setGameLevel(LEVELS.MEDIUM);
                break;
            case "hard":
                setGameLevel(LEVELS.HARD);
                break;
        }
    }

    //VISUALS

    //loading
    if(!grid) 
        return(<div>Loading</div>);

    return(
    <div>
    <ScoreCard flagsLeft={noOfFlags} />
    {console.log(gameLevel)}
    <select 

    defaultValue="medium"
    onChange={handleChangeLevel}
    >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
    </select>
    <BorderWrapper>
    <div>
        {grid.map((row,r) =>{
            return(
            <div style={{display:"flex"}} key={r} >
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
        </div> 
    </BorderWrapper></div>);
}

export default Board;
