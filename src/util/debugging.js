
function printBoard(arr,r,c){
    console.log("Heres your Board!==>");
    for(let i=0;i<r;i++){
        console.log((arr[i].map((item,index)=> (String)(item.value) )));
    }
}
//debugging function
function printGrid(arr,r,c){
    console.log("Heres your Board!==>");
    for(let i=0;i<r;i++){
        console.log((arr[i].map((item,index)=> item.value+(item.revealed ?"1" :"0"))));
    }
}

export  { printBoard , printGrid };