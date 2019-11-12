   function elegirJug2() {
    event.preventDefault();
    document.getElementById("elegirPartida").style.display = "none";
    document.getElementById("participantes2").style.display = "block";
    document.getElementById("botonfin2").style.display = "block";
   }
   function on2() {
        event.preventDefault();
        document.getElementById("hiddenDiv2").style.display = "block";
        var nombre1 = document.getElementById("1nombre2");
        var uno1 = document.getElementById("1uno2");
        var dos1 = document.getElementById("1dos2");
        var tres1 = document.getElementById("1tres2");
        var cuatro1 = document.getElementById("1cuatro2");
        var cinco1 = document.getElementById("1cinco2");
        var seis1 = document.getElementById("1seis2");
        var escalera1 = document.getElementById("1escalera2");
        var full1 = document.getElementById("1full2");
        var pocker1 = document.getElementById("1pocker2");
        var generala1 = document.getElementById("1generala2");
        var generala21 = document.getElementById("1generala22");
    
        var sumaJugador1 = parseInt(uno1.value)+parseInt(dos1.value)+parseInt(tres1.value)+parseInt(cuatro1.value)+parseInt(cinco1.value)+parseInt(seis1.value)+parseInt(escalera1.value)+parseInt(full1.value)+parseInt(pocker1.value)+parseInt(generala1.value)+parseInt(generala21.value);
        
        var nombre2 = document.getElementById("2nombre2");
        var uno2 = document.getElementById("2uno2");
        var dos2 = document.getElementById("2dos2");
        var tres2 = document.getElementById("2tres2");
        var cuatro2 = document.getElementById("2cuatro2");
        var cinco2 = document.getElementById("2cinco2");
        var seis2 = document.getElementById("2seis2");
        var escalera2 = document.getElementById("2escalera2");
        var full2 = document.getElementById("2full2");
        var pocker2 = document.getElementById("2pocker2");
        var generala2 = document.getElementById("2generala2");
        var generala22 = document.getElementById("2generala22");
    
        var sumaJugador2 = parseInt(uno2.value)+parseInt(dos2.value)+parseInt(tres2.value)+parseInt(cuatro2.value)+parseInt(cinco2.value)+parseInt(seis2.value)+parseInt(escalera2.value)+parseInt(full2.value)+parseInt(pocker2.value)+parseInt(generala2.value)+parseInt(generala22.value);
        
        function jugadores2(){
        if (sumaJugador1>sumaJugador2) {
            document.getElementById("h212").innerHTML = "Ganador: " + nombre1.value;
        } else if (sumaJugador1<sumaJugador2) {
            document.getElementById("h212").innerHTML = "Ganador: " + nombre2.value;
        } else {
            document.getElementById("h212").innerHTML = "Empate!"
        }
        }
        return jugadores2();
        }

function elegirJug3() {
    event.preventDefault();
    document.getElementById("elegirPartida").style.display = "none";
    document.getElementById("participantes3").style.display = "block";
    document.getElementById("botonfin3").style.display = "block"; 
}
    function on3() {
        event.preventDefault();
        document.getElementById("hiddenDiv3").style.display = "block";
        var nombre1 = document.getElementById("1nombre3");
        var uno1 = document.getElementById("1uno3");
        var dos1 = document.getElementById("1dos3");
        var tres1 = document.getElementById("1tres3");
        var cuatro1 = document.getElementById("1cuatro3");
        var cinco1 = document.getElementById("1cinco3");
        var seis1 = document.getElementById("1seis3");
        var escalera1 = document.getElementById("1escalera3");
        var full1 = document.getElementById("1full3");
        var pocker1 = document.getElementById("1pocker3");
        var generala1 = document.getElementById("1generala3");
        var generala21 = document.getElementById("1generala23");
    
        var sumaJugador1 = parseInt(uno1.value)+parseInt(dos1.value)+parseInt(tres1.value)+parseInt(cuatro1.value)+parseInt(cinco1.value)+parseInt(seis1.value)+parseInt(escalera1.value)+parseInt(full1.value)+parseInt(pocker1.value)+parseInt(generala1.value)+parseInt(generala21.value);
        
        var nombre2 = document.getElementById("2nombre3");
        var uno2 = document.getElementById("2uno3");
        var dos2 = document.getElementById("2dos3");
        var tres2 = document.getElementById("2tres3");
        var cuatro2 = document.getElementById("2cuatro3");
        var cinco2 = document.getElementById("2cinco3");
        var seis2 = document.getElementById("2seis3");
        var escalera2 = document.getElementById("2escalera3");
        var full2 = document.getElementById("2full3");
        var pocker2 = document.getElementById("2pocker3");
        var generala2 = document.getElementById("2generala3");
        var generala22 = document.getElementById("2generala23");
    
        var sumaJugador2 = parseInt(uno2.value)+parseInt(dos2.value)+parseInt(tres2.value)+parseInt(cuatro2.value)+parseInt(cinco2.value)+parseInt(seis2.value)+parseInt(escalera2.value)+parseInt(full2.value)+parseInt(pocker2.value)+parseInt(generala2.value)+parseInt(generala22.value);
        
        var nombre3 = document.getElementById("3nombre3");
        var uno3 = document.getElementById("3uno3");
        var dos3 = document.getElementById("3dos3");
        var tres3 = document.getElementById("3tres3");
        var cuatro3 = document.getElementById("3cuatro3");
        var cinco3 = document.getElementById("3cinco3");
        var seis3 = document.getElementById("3seis3");
        var escalera3 = document.getElementById("3escalera3");
        var full3 = document.getElementById("3full3");
        var pocker3 = document.getElementById("3pocker3");
        var generala3 = document.getElementById("3generala3");
        var generala23 = document.getElementById("3generala23");
    
        var sumaJugador3 = parseInt(uno3.value)+parseInt(dos3.value)+parseInt(tres3.value)+parseInt(cuatro3.value)+parseInt(cinco3.value)+parseInt(seis3.value)+parseInt(escalera3.value)+parseInt(full3.value)+parseInt(pocker3.value)+parseInt(generala3.value)+parseInt(generala23.value);
        
        var ganador3 = Math.max(sumaJugador1, sumaJugador2, sumaJugador3);
        
        function jugadores3(){
            if (sumaJugador1===sumaJugador2 & sumaJugador1===sumaJugador3) {
                document.getElementById("h213").innerHTML = "Triple empate!";
            } else if (sumaJugador1===sumaJugador2 & sumaJugador1>sumaJugador3) {
                document.getElementById("h213").innerHTML = "Empate entre " + nombre1.value + " y " + nombre2.value;
            } else if (sumaJugador1===sumaJugador3 & sumaJugador1>sumaJugador2) {
                document.getElementById("h213").innerHTML = "Empate entre " + nombre1.value + " y " + nombre3.value;
            } else if (sumaJugador2===sumaJugador3 & sumaJugador2>sumaJugador1) {
                document.getElementById("h213").innerHTML = "Empate entre " + nombre2.value + " y " + nombre3.value;
            } else if (ganador3 === sumaJugador1) {
                document.getElementById("h213").innerHTML = "Ganador: " + nombre1.value;
            } else if (ganador3 === sumaJugador2) {
                document.getElementById("h213").innerHTML = "Ganador: " + nombre2.value;
            } else if (ganador3 === sumaJugador3) {
                document.getElementById("h213").innerHTML = "Ganador: " + nombre3.value;
            } 
            }
            return jugadores3();      
        }
    
function elegirJug4() {
    event.preventDefault();
    document.getElementById("elegirPartida").style.display = "none";
    document.getElementById("participantes4").style.display = "block";
    document.getElementById("botonfin4").style.display = "block";  
}
    function on4() {
    event.preventDefault();
    document.getElementById("hiddenDiv4").style.display = "block";
    var nombre1 = document.getElementById("1nombre4");
    var uno1 = document.getElementById("1uno4");
    var dos1 = document.getElementById("1dos4");
    var tres1 = document.getElementById("1tres4");
    var cuatro1 = document.getElementById("1cuatro4");
    var cinco1 = document.getElementById("1cinco4");
    var seis1 = document.getElementById("1seis4");
    var escalera1 = document.getElementById("1escalera4");
    var full1 = document.getElementById("1full4");
    var pocker1 = document.getElementById("1pocker4");
    var generala1 = document.getElementById("1generala4");
    var generala21 = document.getElementById("1generala24");

    var sumaJugador1 = parseInt(uno1.value)+parseInt(dos1.value)+parseInt(tres1.value)+parseInt(cuatro1.value)+parseInt(cinco1.value)+parseInt(seis1.value)+parseInt(escalera1.value)+parseInt(full1.value)+parseInt(pocker1.value)+parseInt(generala1.value)+parseInt(generala21.value);
    
    var nombre2 = document.getElementById("2nombre4");
    var uno2 = document.getElementById("2uno4");
    var dos2 = document.getElementById("2dos4");
    var tres2 = document.getElementById("2tres4");
    var cuatro2 = document.getElementById("2cuatro4");
    var cinco2 = document.getElementById("2cinco4");
    var seis2 = document.getElementById("2seis4");
    var escalera2 = document.getElementById("2escalera4");
    var full2 = document.getElementById("2full4");
    var pocker2 = document.getElementById("2pocker4");
    var generala2 = document.getElementById("2generala4");
    var generala22 = document.getElementById("2generala24");

    var sumaJugador2 = parseInt(uno2.value)+parseInt(dos2.value)+parseInt(tres2.value)+parseInt(cuatro2.value)+parseInt(cinco2.value)+parseInt(seis2.value)+parseInt(escalera2.value)+parseInt(full2.value)+parseInt(pocker2.value)+parseInt(generala2.value)+parseInt(generala22.value);
    
    var nombre3 = document.getElementById("3nombre4");
    var uno3 = document.getElementById("3uno4");
    var dos3 = document.getElementById("3dos4");
    var tres3 = document.getElementById("3tres4");
    var cuatro3 = document.getElementById("3cuatro4");
    var cinco3 = document.getElementById("3cinco4");
    var seis3 = document.getElementById("3seis4");
    var escalera3 = document.getElementById("3escalera4");
    var full3 = document.getElementById("3full4");
    var pocker3 = document.getElementById("3pocker4");
    var generala3 = document.getElementById("3generala4");
    var generala23 = document.getElementById("3generala24");

    var sumaJugador3 = parseInt(uno3.value)+parseInt(dos3.value)+parseInt(tres3.value)+parseInt(cuatro3.value)+parseInt(cinco3.value)+parseInt(seis3.value)+parseInt(escalera3.value)+parseInt(full3.value)+parseInt(pocker3.value)+parseInt(generala3.value)+parseInt(generala23.value);
    
    var nombre4 = document.getElementById("4nombre4");
    var uno4 = document.getElementById("4uno4");
    var dos4 = document.getElementById("4dos4");
    var tres4 = document.getElementById("4tres4");
    var cuatro4 = document.getElementById("4cuatro4");
    var cinco4 = document.getElementById("4cinco4");
    var seis4 = document.getElementById("4seis4");
    var escalera4 = document.getElementById("4escalera4");
    var full4 = document.getElementById("4full4");
    var pocker4 = document.getElementById("4pocker4");
    var generala4 = document.getElementById("4generala4");
    var generala24 = document.getElementById("4generala24");

    var sumaJugador4 = parseInt(uno4.value)+parseInt(dos4.value)+parseInt(tres4.value)+parseInt(cuatro4.value)+parseInt(cinco4.value)+parseInt(seis4.value)+parseInt(escalera4.value)+parseInt(full4.value)+parseInt(pocker4.value)+parseInt(generala4.value)+parseInt(generala24.value);

    var ganador4 = Math.max(sumaJugador1, sumaJugador2, sumaJugador3, sumaJugador4);

                function jugadores4() {
                    if (sumaJugador1===sumaJugador2 & sumaJugador1===sumaJugador3 & sumaJugador1===sumaJugador4) {
                        document.getElementById("h214").innerHTML = "Cuádruple empate!";
                    } else if (sumaJugador1===sumaJugador2 & sumaJugador1===sumaJugador3 & sumaJugador1>sumaJugador4) {
                        document.getElementById("h214").innerHTML = "Empate entre " + nombre1.value + ", " + nombre2.value + " y " + nombre3.value;
                    } else if (sumaJugador1===sumaJugador2 & sumaJugador1===sumaJugador4 & sumaJugador1>sumaJugador3) {
                        document.getElementById("h214").innerHTML = "Empate entre " + nombre1.value + ", " + nombre2.value + " y " + nombre4.value;
                    } else if (sumaJugador1===sumaJugador3 & sumaJugador1===sumaJugador4 & sumaJugador1>sumaJugador2) {
                        document.getElementById("h214").innerHTML = "Empate entre " + nombre1.value + ", " + nombre3.value + " y " + nombre4.value;
                    } else if (sumaJugador3===sumaJugador2 & sumaJugador3===sumaJugador4 & sumaJugador3>sumaJugador1) {
                        document.getElementById("h214").innerHTML = "Empate entre " + nombre3.value + ", " + nombre2.value + " y " + nombre4.value;
                    } else if (sumaJugador1===sumaJugador2 & sumaJugador1>sumaJugador3 & sumaJugador1>sumaJugador4) {
                        document.getElementById("h214").innerHTML = "Empate entre " + nombre1.value + " y " + nombre2.value;
                    } else if (sumaJugador2===sumaJugador3 & sumaJugador2>sumaJugador1 & sumaJugador2>sumaJugador4) {
                        document.getElementById("h214").innerHTML = "Empate entre " + nombre2.value + " y " + nombre3.value;
                    } else if (sumaJugador3===sumaJugador4 & sumaJugador3>sumaJugador1 & sumaJugador3>sumaJugador2) {
                        document.getElementById("h214").innerHTML = "Empate entre " + nombre3.value + " y " + nombre4.value;
                    } else if (sumaJugador3===sumaJugador1 & sumaJugador3>sumaJugador2 & sumaJugador3>sumaJugador4) {
                        document.getElementById("h214").innerHTML = "Empate entre " + nombre3.value + " y " + nombre1.value;
                    } else if (sumaJugador4===sumaJugador1 & sumaJugador4>sumaJugador2 & sumaJugador4>sumaJugador3) {
                        document.getElementById("h214").innerHTML = "Empate entre " + nombre4.value + " y " + nombre1.value;
                    } else if (sumaJugador4===sumaJugador2 & sumaJugador4>sumaJugador1 & sumaJugador4>sumaJugador3) {
                        document.getElementById("h214").innerHTML = "Empate entre " + nombre4.value + " y " + nombre2.value;
                    } else if (ganador4 === sumaJugador1) {
                        document.getElementById("h214").innerHTML = "Ganador: " + nombre1.value;
                    } else if (ganador4 === sumaJugador2) {
                        document.getElementById("h214").innerHTML = "Ganador: " + nombre2.value;
                    } else if (ganador4 === sumaJugador3) {
                        document.getElementById("h214").innerHTML = "Ganador: " + nombre3.value;
                    } else if (ganador4 === sumaJugador4) {
                        document.getElementById("h214").innerHTML = "Ganador: " + nombre4.value;
                    } 
                    }
                    return jugadores4();
            }