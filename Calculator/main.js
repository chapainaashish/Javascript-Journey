function inputCalc(id) {
    document.getElementById("box").value += id.value;
}

function equalTo() {
    document.getElementById('box').value = eval(document.getElementById('box').value);
}

function clr() {
    document.getElementById('box').value = '';
}