import {printBoard} from "./debugging";

export default ({ROW:row,COL:col,BOMBS:bombs})=>{
    const VECTORS=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    let board=[];
    let mineLocations=[];

    //BOARD
    for(let i=0;i<row;i++){
        let row=[];
        for(let j=0;j<col;j++){
            row.push({
                value:0,
                revealed:false,
                x:i,
                y:j,
                flagged:false
            });
        }
        board.push(row);
    }


    //Randomizing Bombs
    let bombCount=0;
    while(bombCount < bombs){

        //while loop to avoid overlap of bombs
        let x=Math.floor(Math.random()*row);
        let y=Math.floor(Math.random()*col);

        if(board[x][y].value===0){
            //if the cell didnt already have a bomb
            board[x][y].value="X";
            mineLocations.push([x,y]);
            bombCount++;
        }
    }
    

    //Adding Number Around The Bombs
    mineLocations.forEach((mine)=>{
        //all surround cells
        VECTORS.forEach((v)=>{
            let surrX=mine[0]+v[0];
            let surrY=mine[1]+v[1];
            if(surrX >=0 && surrY >=0 
                && surrX < row && surrY < col 
                && board[surrX][surrY].value!=="X"){
                board[surrX][surrY].value++; 
            }
        });
    });
    
                
    printBoard(board,row,col);
    
    return { board , mineLocations };
}