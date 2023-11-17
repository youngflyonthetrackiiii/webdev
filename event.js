document.getElementById("greeting").addEventListener("click", function () {
    document.getElementById("greeting").innerHTML = "goodbye!";
});

document.getElementById("greeting").addEventListener("dblclick", function () {
    document.getElementById("greeting").innerHTML = "Hello world!";
});

document.getElementById("color").addEventListener("mouseover", function () {
    document.getElementById("color").style.backgroundColor = "red";;
    document.getElementById("color").style.height = "500px";
    document.getElementById("color").style.width = "500px";
    document.getElementById("color").style.borderRadius = "50%"
});

document.getElementById("color").addEventListener("mouseout", function () {
    document.getElementById("color").style.backgroundColor = "blue";;
    document.getElementById("color").style.height = "200px";
    document.getElementById("color").style.width = "200px";
    document.getElementById("color").style.borderRadius = "0%"
});

document.getElementById("drag").addEventListener("drag", function () {
    document.getElementById("drag").innerHTML = "weeeeee";
});

document.getElementById("blur").addEventListener("blur", function () {
  let x = document.getElementById("blur");
  x.value = x.value.toUpperCase();
});

document.getElementById("copy").addEventListener("copy", function () {
    document.getElementById("copy").innerHTML = "you copied me";
});

document.getElementById("paste").addEventListener("paste", function () {
    document.getElementById("copy").innerHTML = "you pasted me";
});

document.getElementById("cut").addEventListener("cut", function () {
    document.getElementById("cut").innerHTML = "ahhhhhhhh :o!";
});

document.getElementById("fav-food").addEventListener("change", function () {
    document.getElementById("select").innerHTML = `you have chosen ${document.getElementById("fav-food").value}`;
});


