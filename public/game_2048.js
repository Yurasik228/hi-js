
const boardSize = 4;

var board = [
    [0, 0, 0, 0 ],
    [0, 0, 0, 0 ],
    [0, 0, 0, 0 ],
    [0, 0, 0, 0 ]
];

var elBoard = document.querySelectorAll('table#game2048 td') ;

function drawBoard() {
    for ( let r=0; r < boardSize; r++ ) {
        for ( let c=0; c < boardSize; c++){
            let i = boardSize * r + c;
            if (board [ r ] [ c ] >0 ) {
                elBoard[ i ].innerText = board[ r ] [ c ];
            } else {
                elBoard[ i ].innerText = '';
            }
            let cl = 'c-' + board[ r ][ c ];
            elBoard[i].className = cl;
        }
    
    }

}



function mover( a ) {
                                                // [0, 0, 0, 0]
for ( let c=0; c < boardSize; c++){           // 1)всі клітинки без останньої
    if (a[ c ] == 0 ) {                         // 2) 0 ?
        let cNe0 = -1;                           
        for (let cR=c+1; cR< boardSize; cR++) { //    2.1) врпаво ? > 0 ( cNe0)
            if( a [ cR ] > 0 ) {
                cNe0 = cR;
                break
            }
        }
        if ( cNe0 !=-1 ) {                                          
            a[ c ]= a [ cNe0 ];                     //    2.2) ( c ) = ( cNe0 );
            a[ cNe0 ] = 0;                          //    2.3) (cNe0) = 0             
        }
                                            // 3) вправо ? = c ? так (cEq)
    }
    let cEq = -1;
    for ( let cR=c+1; cR < boardSize; cR++ ){
        if ( a [ c ] == a [cR] ){
            cEq = cR;
            break;
        }
        if ( a[ cR ] >  0) {
            break;

        }
    }
        if (cEq != -1) {
            a[ c ] += a[ cEq ];
            a[ cEq ] = 0; 
        }                                        //    3.1) ( c ) += ( cEq ); (cEq = 0 )
    }   

 return a;
 
}

function onKey( e ){
    switch ( e.keyCode ) {
        case 37: mvLeft(); break;
        case 38: mvUp(); break;
        case 39: mvRight(); break;
        case 40: mvDown(); break;
    }
    nextNumber();
    drawBoard();
} 

function mvLeft() {
    for ( let r=0; r < boardSize; r++ ) {      //всі рядки
        //let row = board[ r ];                //взяти конкретний рядок
        //row = mover( row );                  //рухаєм вліво цей рядок
        //board[ r ] = r;                      //покласти назад рядок
        board[ r ] = mover (board [ r ] );         
    }
                      
}
function mvRight(){
    for ( let r=0; r < boardSize; r++ ) {
        board[ r ] = mover(board[ r ].reverse() ).reverse();
    }



}
function mvUp() {
    for ( let c=0; c < boardSize; c++ ) {
        let a = [ board[0][c],board[1][c],board[2][c], board[3][c] ];
        a = mover(a);
        board[0][c] = a[0];
        board[1][c] = a[1];
        board[2][c] = a[2];
        board[3][c] = a[3];
    }


}

function mvDown() {
    for ( let c=0; c < boardSize; c++ ) {
        let a = [ board[0][c],board[1][c],board[2][c], board[3][c] ];
        a = mover(a.reverse() ).reverse();
        board[0][c] = a[0];
        board[1][c] = a[1];
        board[2][c] = a[2];
        board[3][c] = a[3];
    }


}

function gameRnd() {                                                                                                                                                                                                                                                                                                                                                                                                                                                             

    let r = Math.random();
    if (r > 0.9 ){
        return 4;                      ;
    }else{
        return 2;
    }
}

function getZeros() {
    let a = [];
    for ( let r=0 ; r< boardSize; r++ ){
        for ( let c=0; c < boardSize; c++ ){
            if ( board[ r ] [ c ] == 0 ){
                a.push( [ r,c ] );

            }
        }
    }
    return a;

}

function nextNumber() {
    let a = getZeros();
    let n = a.length;
    let i = Math.floor (n * Math.random() );
    if ( n >= 0)
    board[ a[i][0] ][ a[i][1] ] = gameRnd();
}
nextNumber();
nextNumber();
drawBoard();








