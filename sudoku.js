let n = 4;
var b1 = [  
    [0,2,4,0],
    [1,0,0,3],
    [4,0,0,2],
    [0,1,3,0]
    ]; 
function nextEmptySpot(b1){
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n;j++){
            if(b1[i][j] === 0)
                return [i,j];
        }
    }
    return [-1,-1];
}
    
function checkRow(b1,row,value){
    for(var i = 0; i < b1[row].length; i++){
        if(b1[row][i] === value){
            return false;
        }
    }
    return true;
}
    
function checkCol(b1,col,value){
    for(var i = 0; i < b1.length; i++){
        if(b1[i][col] === value){
            return false;
    }
}
    return true;
}
    
function checkSquare(b1,row,col,value){
    let sqrt = Math.sqrt(n);
    boxRow = Math.floor(row /(Math.sqrt(n))) * (Math.sqrt(n));
    boxCol = Math.floor(col /(Math.sqrt(n))) * (Math.sqrt(n));

    for(var r = 0; r < sqrt; r++){
        for(var c = 0; c < sqrt; c++){
            if(b1[boxRow + r][boxCol + c] === value)
                return false;
        }
    }
    return true;
}
    
function checkValue(b1,row,col,value){
    if(checkRow(b1,row,value) && checkCol(b1,col,value) && checkSquare(b1,row,col,value)){
        return true;
    }
    return false;
}
    
function solve(b1){
    let emptySpot = nextEmptySpot(b1);
    let row = emptySpot[0];
    let col = emptySpot[1];
    
    if(row === -1){
        return b1;
    }
    
    for(let num = 1; num <= n; num++){
        if(checkValue(b1,row,col,num)){
            b1[row][col] = num;
            solve(b1);
        }
    }
    if(nextEmptySpot(b1)[0] !== -1)
        b1[row][col] = 0;
        
    return b1;
}
console.table(solve(b1));