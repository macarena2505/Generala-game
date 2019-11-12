/* for (var i=1; i<10; i++) {console.log ("el valor es: " +i )} */
/*
var i= 0; 
while (i<10){
    console.log ("el valor es " + i); i++;
}*/
/*
function contarhastadiez(){
for (var i=1; i<10; i++) {console.log ("el valor es: " +i )} }

contarhastadiez (); */
/* EJERCICIO 1
var numero1= parseInt(prompt ("deci 1 numero"));
var numero2= parseInt(prompt ("decidi otro numero"));


function ej1(n1,n2) { 
 if (n1>n2) { document.write (n1) }
 else 
  { document.write (n2)}; 
}
 
ej1 (numero1,numero2) */

/* EJERCICIO 2
var cosa1= prompt ("deci tu nombre");
var cosa2= prompt ("deci tu apellido");

function suma (n1,n2) {
    var resultado= n1 + n2;
    alert ( "tu nombre es " + resultado);
};

suma (cosa1, cosa2); */

/* EJERCICIO 3
var numero1= parseInt(prompt("cuantas veces quiere ver 1 asterisco"))
var asterisco= " ";

function devolver () { 
    for (var i=0; i<=numero1; i++ ){document.write ("*");}
}

devolver ();

*/

//var colores = [ "rojo", "amarillo", "verde"]
/*colores.length: /*me va a mostrar cuantos objetos hay
colores[0] te daria el rojo, 1 el amarillo, 2 el verde */
/* ARRAY
var dato= [2,6,5,1,18,44];
//recorrido con for
for (var i=0; i<dato.length; i++) {console.log (dato [i]);} */
/* Objetos */ 
/*
var person = {
firstName: "John",
lastName: "Doe",
age: 50,
eyeColor: "blue"
};

for (i in person) {
console.log (i);} */


function mostrarHora () {
    document.write (Date())
}
