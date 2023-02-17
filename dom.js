console.log("entramos");
var items= document.getElementsByName("item")
var cantidad=items.length;

console.log(cantidad)

console.log("cantidad de listas" + cantidad)
var div= document.createElement("div");
div;

div.innerText="Aprendiendo Javascript";
var divuno=document.getElementById("uno");
divuno.appendChild(div);

var lista=document.getElementById("lista");
var lista1=document.createElement("li");
lista1.innerText="li dinamico";
lista.appendChild(lista1);

var parrafo=document.getElementById("tres").style.color="red";
var listas=document.getElementById("lista").style.color="green";