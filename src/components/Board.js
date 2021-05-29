import React ,{ useState,useEffect }from 'react'
import createBoard from '../util/createBoard';
import Cell from './Cell';

const VECTORS=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
const ROW=10;
const COL=10;
const BOMBS=20;

function Board() {
    const [grid,setGrid]= useState([]);

    //First Mount
    useEffect(() => {
        //creating a fresh board
        const freshBoard = () => {
            const newBoard=createBoard(ROW,COL,BOMBS);
            console.log(newBoard.board);
            setGrid(newBoard.board);
        }
        freshBoard();
    }, []);

    function printGrid(){
        console.log("Heres your Board!==>");
        for(let i=0;i<ROW;i++){
            console.log((grid[i].map((item,index)=> item.revealed )));
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

        let updatedGrid=JSON.parse(JSON.stringify(grid));
        updatedGrid[x][y].revealed=true;
        setGrid(updatedGrid);

        revealCell(x,y);
        
    }

    const revealCell = (x,y) =>{

        if(grid[x][y].revealed === true){
            console.log("checkRevealed");
            return;
        } ;

        console.log(x+" "+y+" "+grid[x][y].revealed +" "+grid[x][y].value);

        //BOOM
        if(grid[x][y].value === "X") {
            alert ("Mine Found");
        }

        //KHOKHLA
        if(grid[x][y].value === 0){
            floodReveal(x,y);
        }
    }

    const floodReveal= (x,y) =>{
        VECTORS.forEach((v,vindex)=>{
            let surrX= x + v[0];
            let surrY= y + v[1];
            if(surrX >=0 && surrY >=0 
                && surrX < ROW && surrY < COL 
                && grid[surrX][surrY].value!=="X"
                && !grid[surrX][surrY].revealed ){
                    

                //recursive Call to reveal Cell
                let updatedGrid=JSON.parse(JSON.stringify(grid));
                updatedGrid[x][y].revealed=true;
                setGrid(updatedGrid);
                setTimeout(revealCell(surrX,surrY) ,100);

                
                
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
