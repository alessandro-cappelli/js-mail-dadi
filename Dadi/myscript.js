let utente = Math.floor(Math.random()*6+1);
let computer = Math.floor(Math.random()*6+1);

document.getElementById("utente-").innerHTML = `Numero utente:  ${utente}`;
document.getElementById("computer-").innerHTML = `Numero del computer:  ${computer}`;


if(utente > computer){
	document.getElementById("vincitore").innerHTML = "Vinto";
}else if(utente == computer){
    document.getElementById("vincitore").innerHTML = "Pareggio";
}else{
    document.getElementById("vincitore").innerHTML = "Perso";
}