function calc(){
    let add1 = document.getElementById("addition-1").value;
    let add2 = document.getElementById("addition-2").value;

    let total = Number(add1) + Number(add2)

    document.getElementById("addition-answer").innerHTML = `${total}`
}
    
function calc(){
    let sub1 = document.getElementById("subtraction-1").value;
    let sub2 = document.getElementById("subtraction-2").value;

    let total = Number(sub1) - Number(sub2)

    document.getElementById("subtraction-answer").innerHTML = `${total}`
}