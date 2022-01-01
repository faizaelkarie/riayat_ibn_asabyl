function requiredElement() {
var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var email = document.getElementById("email").value;
var date = document.getElementById("date").value;
var tel = document.getElementById("tel").value;
var decrir = document.getElementById("decrir").value;

if(nom== "") {
alert("Veillez insérer votre Nom");
document.getElementById("nom").style.backgroundColor="red";
document.getElementById("nom").focus();
return false;
}
if(prenom == "") {
alert("Veillez insérer votre Prénom");
document.getElementById("prenom").style.backgroundColor="red";
document.getElementById("prenom").focus();
return false;
}
if(email == "") {
alert("Veillez insérer votre Email");
document.getElementById("email").style.backgroundColor="red";
document.getElementById("email").focus();
return false;
}

if(date == "") {
alert("Veillez insérer la date de nessance");
document.getElementById("date").style.backgroundColor="red";
document.getElementById("date").focus();
return false;
}
if(tel == "") {
alert("Veillez insérer votre némero de telephone");
document.getElementById("tel").style.backgroundColor="red";
document.getElementById("tel").focus();
return false;
}
if(decrir == "") {
alert("Veillez insérer votre message");
document.getElementById("decrir").style.backgroundColor="red";
document.getElementById("decrir").focus();
return false;
}


return true;
}
function nomValidate() { 

var letters = /^[A-Za-z]+$/;
var nom = document.getElementById("nom");
if(nom.value.match(letters)) {
document.getElementById("nom").style.backgroundColor="white";
return true;
} else {
alert('Le nom ne doit contenir que des lettres');
document.getElementById("nom").style.backgroundColor="red";
document.getElementById("nom").focus();
return false;
}
}
function prenomValidate() { 

var letters = /^[A-Za-z]+$/;
var prenom = document.getElementById("prenom");
if(prenom.value.match(letters)) {
document.getElementById("prenom").style.backgroundColor="white";
return true;
} else {
alert('Le prenom ne doit contenir que des lettres');
document.getElementById("prenom").style.backgroundColor="red";
document.getElementById("prenom").focus();
return false;
}
}
function validateEmail(champsText){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(champsText.value.match(mailformat)){
document.form.email.focus();
document.getElementById("email").style.backgroundColor="white";
return true;
}else{
alert("Veuillez insérer une adresse email valide!");
document.getElementById("email").style.backgroundColor="red";
document.form.email.focus();
return false;
}
}
function telValidate() {
var tel = document.getElementById("tel");
var n1 = tel.value;
if( n1=="" ||isNaN(n1) || n1 < 0999999999 || n1 >0000000000) {
alert("votre némerode tilliphone n'est pas valide!");
document.getElementById("tel").style.backgroundColor="red";

document.getElementById("tel").focus();
return false;
}else{
document.getElementById("tel").style.backgroundColor="white";
return true;
}
}
function messageValidate() { 
var letters = /^[A-Za-z]+$/;
var decrir = document.getElementById("decrir");
if(prenom.value.match(letters)) {
document.getElementById("decrir").style.backgroundColor="white";
return true;
} else {
alert('Le message ne doit contenir que des lettres');
document.getElementById("decrir").style.backgroundColor="red";
document.getElementById("decrir").focus();
return false;
}
}
function validateForm(){
if (!requiredElement()){
return false;
}
else{
confirm("Toutes les données sont validées !, Voulez-vous les envoyer au serveur?");
}
}