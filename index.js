hacker = 'Ferran';

console.log("Bienvido "+ hacker);

user = prompt ("Cual es tu nombre?");

console.log ( user + " Bienvenido ");

lengthHacker = hacker.length;
lengthUser  = user.length;

if ( lengthHacker > lengthUser){

    console.log("El nombre de Hacker es más largo, tiene"+lengthHacker+"letras");

}
if ( lengthHacker < lengthUser){

    console.log("El nombre de User es más largo, tiene"+lengthUser+"letras");
    
}
if ( lengthHacker === lengthUser){

    console.log("Ambos nombres son igual de largos, tienen "+lengthHacker+" letras");
    
}

console.log (hacker.toUpperCase() +" "+user.toUpperCase());
var sCadenaInvertida = "";
for (x=lengthHacker-1; x>=0 ; x--) {
        sCadenaInvertida = sCadenaInvertida + hacker.charAt(x);
}

console.log (sCadenaInvertida);

var n =hacker.localeCompare(user);

if( n === -1){

    console.log("El nombre del Hacker va primero");
}

if( n === 1){

    console.log("El nombre del User va primero");
}

if( n === 0){

    console.log("Los nombres son iguales");
}



