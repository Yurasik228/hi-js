function playS( id ) {
    const audio = document.getElementById('snd'+id);
    const divkey= document.getElementById('k'+id);
    audio.currentTime = 0;
    audio.play();
    divkey.className = 'active';

}
function clearS( id ){
    const divkey = document.getElementById('k'+id)
    divkey.className = '';
}
 


 

function myKeysDw( e ){
    switch (e.keyCode) {
        case 65: playS ('01'); break;
        case 83: playS ('02'); break;
        case 68: playS ('03'); break;
        default: console.log(e);
            break;
    }
}
function myKeysUp( e ){
    switch (e.keyCode) {
        case 65: clears ('01'); break;
        case 83: clearS ('02'); break;
        case 68: clearS ('03'); break;
        default: console.log(e);
            break;
    }
}