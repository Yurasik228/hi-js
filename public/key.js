function setBg( c ){
    document.bgColor = c;
}

function myKeys( e ){
    console.log( e )
    switch (e.keyCode) {
        case 65: setBg('red');
            break;
        case 83: setBg('green');
            break;
        case 68: setBg('blue');
            break;

        default: console.log(e);
            break;
    }
}