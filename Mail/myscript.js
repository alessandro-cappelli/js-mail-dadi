let email = ["luca@gmail.it", "ale@gmail.it", "andrea@gmail.it"];

let insertEmail = prompt('inserisci la tua email');
let controllo = false;

for(let index = 0; index < email.length; index++){
    if(insertEmail == email[index]){
        controllo = true
    }
    console.log(email[index], controllo);
}

if(controllo){
    console.log('EMAIL GIUSTA')
    document.getElementById('email-inserita') .innerHTML = "Benvenuto!"
}else{
    console.log('EMAIL NON TROVATA')
    document.getElementById('email-inserita') .innerHTML = "Account non trovato"
}