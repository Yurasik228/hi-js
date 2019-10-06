var elem_a = document.getElementById('el_a');
var elem_b = document.getElementById('el_b');
var elem_r = document.getElementById('el_r');

function myAdd() {
    let A = elem_a.value;
    let B = elem_b.value;
    let R = Number(A) + Number(B);
    elem_r.innerHTML=R;
}


