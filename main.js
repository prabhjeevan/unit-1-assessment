var totaldisplay = document.getElementById('totaldisplay').innerHTML
var inputvalue = document.getElementById('numinput')
// `${value}`

let buttonadd = document.getElementById('add')
let buttonminus = document.getElementById('minus')


buttonadd.addEventListener('click', add)
buttonminus.addEventListener('click', minus)


function add(){
    let i = totaldisplay
    let inputvalue3 = inputvalue.value;
    plus = parseFloat(i) + parseFloat(inputvalue3);
    totaldisplay = plus;
    document.getElementById('totaldisplay').innerHTML = totaldisplay
    checknegative();
}

function minus() {
    let minus = totaldisplay
    let inputvalue2 = inputvalue.value;
    minus = minus - inputvalue2
    totaldisplay = minus;
    document.getElementById('totaldisplay').innerHTML = totaldisplay
    checknegative();
}

function checknegative() {
    if (totaldisplay < 0) {
        document.getElementById('totaldisplay').classList.add('negative')
    } else
    document.getElementById('totaldisplay').classList.remove('negative')
}
