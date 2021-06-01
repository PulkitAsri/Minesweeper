import React ,{ useState,useEffect }from 'react'
import createBoard from '../util/createBoard';
import Cell from './Cell';
import BoardWrapper from "./BoardWrapper"
import _ from "lodash";

import ScoreCard from './ScoreCard';
import StyledSelector from './StyledSelector';
import GameOverModel from './GameOverModel';
import RowWrapper from './RowWrapper';

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
    const [gameLevel,setGameLevel]= useState(LEVELS.MEDIUM);
    const [noOfFlags,setNoOfFlags]= useState(gameLevel.BOMBS);
    const [noOfCellsLeft,setNoOfCellsLeft]= useState((gameLevel.COL*gameLevel.ROW) - gameLevel.BOMBS);
    const [gameOverState,setGameOverState]= useState({
        gameOver:false,
        win:false
    })
    
    //Whenever GameLevel Changes
    useEffect(()=>{
        freshBoard();

    },[gameLevel]);

    //Whenever noOfCellsLeft Changes
    useEffect(()=>{
        if(noOfCellsLeft===0) 
            setGameOverState({ gameOver:true, win:true });

    },[noOfCellsLeft]);

    //Whenever GameOverState Changes
    useEffect(()=>{
        

    },[gameOverState]);

//TASK   => Styling of selectors

    
    //NEW BOARD
    const freshBoard = () => {
        const newBoard=createBoard(gameLevel.ROW,gameLevel.COL,gameLevel.BOMBS);
        setMineLocations(newBoard.mineLocations);
        setNoOfFlags(gameLevel.BOMBS);
        setNoOfCellsLeft((gameLevel.COL*gameLevel.ROW) - gameLevel.BOMBS);
        setGameOverState({
            gameOver:false,
            win:false
        });
        setGrid(newBoard.board);
        // printGrid(newBoard.board,gameLevel.ROW,gameLevel.COL);
    }
    //OPERATIONS

    //Right Click
    const handleUpdateFlag= (e,x,y) =>{
        e.preventDefault(); //avoiding menu 

        let newGrid=[...grid]; //deep copy
        if(newGrid[x][y].flagged){
            setNoOfFlags((prev)=>prev+1);
        }else{
            setNoOfFlags((prev)=>prev-1);
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
            setNoOfFlags((prev)=>prev+1);
        }else{
           revealCell(newGrid,x,y);  
        }
        setGrid(newGrid);
    }

    const revealCell = (arr,x,y) =>{
        if(arr[x][y].revealed === true) return;

        // Now Consider it revealed here
        arr[x][y].revealed=true;

        if(arr[x][y].value !== "X")
            setNoOfCellsLeft((prev)=>prev-1);//Coz of last cell as a mine 

        //since it has been revealed, definitely not a mine 
        //update the flag counter
        if(arr[x][y].flagged){
            arr[x][y].flagged=false;
            setNoOfFlags((prev)=>prev+1);
        }

        //Empty Cell (Khokla)=>
        if(grid[x][y].value === 0){
            return floodReveal(arr,x,y) ;//call for neighbours
        }

        //BOOM
        if(arr[x][y].value === "X") {
            //Reveal all mines
            for(let m=0 ; m<mineLoctions.length ; m++){
                arr[mineLoctions[m][0]][mineLoctions[m][1]].revealed=true;
            }
            //GAME OVER
            setGameOverState((prev)=>({...prev,gameOver:true}));
        }else{
            setNoOfCellsLeft((prev)=>prev-1);//Only update nonMine cells
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

    //Loading
    if(!grid) 
        return(<div>Loading</div>);
    
    //Loaded
    return(
    <div>
    <ScoreCard flagsLeft={noOfFlags} />
    <ScoreCard flagsLeft={noOfCellsLeft}/>
    <StyledSelector 
        handleChangeLevel={handleChangeLevel} 
        defaultValue="medium" />
    
        
        <BoardWrapper>
        {gameOverState.gameOver&&!gameOverState.win&& <GameOverModel tryAgainClicked={freshBoard} />}
        {grid.map((row,r) =>{
            return(
            <RowWrapper key={r} >
            {row.map((cell,c)=>{
                return(<Cell 
                        key={c} 
                        info={cell} 
                        handleRevealCell={handleRevealCell} 
                        updateFlag={handleUpdateFlag} />);
                })
            }
            </RowWrapper>);
        })}

    </BoardWrapper>
    </div>);
}

export default Board;
