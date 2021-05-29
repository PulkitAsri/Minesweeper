import React ,{ useState,useEffect }from 'react'
import createBoard from '../util/createBoard';
import Cell from './Cell';

const VECTORS=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
const ROW=10;
const COL=10;
const BOMBS=15;

function Board() {
    const [grid,setGrid]= useState([]);
    const [mineLoctions,setMineLocations]= useState([]);

    //First Mount
    useEffect(() => {
        //creating a fresh board
        const freshBoard = () => {
            const newBoard=createBoard(ROW,COL,BOMBS);
            setMineLocations(newBoard.mineLocations);
            console.log(newBoard.board);
            setGrid(newBoard.board);
        }
        freshBoard();
    }, []);


    function printGrid(arr){
        console.log("Heres your Board!==>");
        for(let i=0;i<ROW;i++){
            console.log((arr[i].map((item,index)=> item.value+(item.revealed ?"|TR" :" fa"))));
        }
    }


    //Right Click
    const handleUpdateFlag= (e,x,y) =>{
        e.preventDefault();
        

        let updatedGrid=JSON.parse(JSON.stringify(grid));
        updatedGrid[x][y].flagged=true;
        setGrid(updatedGrid);

        
    }

    //Left Click
    const handleRevealCell = (e,x,y) =>{
        e.preventDefault();

        // let updatedGrid=JSON.parse(JSON.stringify(grid));
        // updatedGrid[x][y].revealed=true;
        // setGrid(updatedGrid);
    
        let updatedGrid=JSON.parse(JSON.stringify(revealCell(grid,x,y)));

        printGrid(updatedGrid);
        
        setGrid(updatedGrid);
    }

    const revealCell = (arr,x,y) =>{
        console.log(x+" "+y);
        

        if(arr[x][y].revealed === true){
            console.log("checkRevealed");
            return arr;
        } 

        arr[x][y].revealed=true;

        //BOOM
        if(arr[x][y].value === "X") {
            for(let mine=0 ; mine<mineLoctions.length ; mine++){
                arr[mineLoctions[mine][0]][mineLoctions[mine][1]].revealed=true;
            }

            return arr;
        }

        //KHOKHLA
        if(grid[x][y].value === 0){
            return arr=floodReveal(arr,x,y) ;
        }
        


    }

    const floodReveal= (arr,x,y) =>{
        VECTORS.forEach((v)=>{
            let surrX= x + v[0];
            let surrY= y + v[1];
            if(surrX >=0 && surrY >=0 
                && surrX < ROW && surrY < COL 
                && arr[surrX][surrY].value!=="X"
                && !arr[surrX][surrY].revealed ){

                    console.log('flood Filling'+surrX+" "+surrY);
                    

                //recursive Call to reveal Cell
                // let updatedGrid=JSON.parse(JSON.stringify(grid));
                arr[x][y].revealed=true;
                return revealCell(arr,surrX,surrY);
                // setGrid(updatedGrid);
                // setTimeout(revealCell(surrX,surrY) ,100); 
            }
        });
    }


    if(!grid) return(<div>Loading</div>);
    return(
    <div>
        {grid.map((row,r) =>{
            return(
            <div style={{display:"flex"}} key={r}>
            {row.map((cell,c)=>{
                return(
                <Cell info={cell} handleRevealCell={handleRevealCell} updateFlag={handleUpdateFlag} key={c}/>);
                })}
            </div>)
            })
        }
    </div>);

}



export default Board;
