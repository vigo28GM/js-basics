// funkcijas ar vienu paramentu
function printname(Firstname) {
    console.log(Firstname);
}
//funcijas izsaukums ar vie argumentu
printname("Gvido");

function enternumber() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

enternumber();

function enternumberuntil(firstnumber, secendnumber) {
    for (let i = firstnumber; i <= secendnumber; i++) {
        console.log(i);
    }
}

enternumberuntil(5, 8);