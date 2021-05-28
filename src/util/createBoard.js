export default (row,col,bombs)=>{
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

    //randomizing bombs
    let bombCount=0;
    while(bombCount<bombs){

        //while loop to avoid overlap of bombs
        let x=Math.floor(Math.random()*row);
        let y=Math.floor(Math.random()*col);

        if(board[x][y].value===0){
            //if the cell didnt already have a bomb
            board[x][y].value="X";
            mineLocations.push(x,y);
            bombCount++;
        }

    }
    const VECTORS=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]

    //Adding Numbers to the grid 
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            

        }
    }
    

}