var selBox = [];

function mouseOver( e ){
    logs( e.target )
    let r = e.target.parentNode.rowIndex;
    let c = e.target.cellIndex;
    let offS = $(e.target).offset();
    if (board[r][c]>0){
        $('div#buttons')
        .show()
        .css( offS );
        selBox=[ r,c ]
    } else {
        $('div#buttons')
        .hide()
        .css( offS );
        selBox=[ ]
        }
    }
 



function moveUp() {
    if (selBox.length > 0 && selBox[0] > 0) {
        let r = selBox[0];
        let c = selBox[1];
        if (board[r-1][c] == 0) {
            board[r-1][c] = board[r][c];
            board[r][c] = 0;
            moveBox([r,c], [r-1,c])
        } else {
            let t = board[r][c];
            board[r][c] = board[r - 1][c];
            board[r - 1][c] = t;
            moveBox([r,c], [r-1,c])
            moveBox([r-1,c], [r,c])
        }
    }
        selBox = [];
    logs('UP')

}

function moveLeft() {
    if (selBox.length > 0 && selBox[0] > 0) {
        let r = selBox[0];
        let c = selBox[1];
        if (board[r][c-1] == 0) {
            board[r][c-1] = board[r][c];
            board[r][c] = 0;
            moveBox([r,c], [r,c-1])
        } else {
            let t = board[r][c];
            board[r][c] = board[r][c-1];
            board[r][c-1] = t;
            moveBox([r,c], [r,c-1])
            moveBox([r,c-1], [r,c])
        }
    }
        selBox = [];
    logs('LEFT')
}

function moveRight() {
    if (selBox.length > 0 && selBox[0] > 0) {
        let r = selBox[0];
        let c = selBox[1];
        if (board[r][c+1] == 0) {
            board[r][c+1] = board[r][c];
            board[r][c] = 0;
            moveBox([r,c], [r,c+1])
        } else {
            let t = board[r][c];
            board[r][c] = board[r][c+1];
            board[r][c+1] = t;
            moveBox([r,c], [r,c+1])
            moveBox([r,c+1], [r,c])
        }
    }
        selBox = [];
    logs('RIGHT')
}

function moveDown() {
    if (selBox.length > 0 && selBox[0] > 0) {
        let r = selBox[0];
        let c = selBox[1];
        if (board[r+1][c] == 0) {
            board[r+1][c] = board[r][c];
            board[r][c] = 0;
            moveBox([r,c], [r+1,c])
        } else {
            let t = board[r][c];
            board[r][c] = board[r + 1][c];
            board[r + 1][c] = t;
            moveBox([r,c], [r+1,c])
            moveBox([r+1,c], [r,c])
        }
    }
        selBox = [];
    logs('DOWN')
}

function logs( msg ){
    console.log( msg )

}