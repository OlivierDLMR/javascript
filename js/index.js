console.log('Hello Olivier !')

let majeur = prompt("votre age?");
if(majeur >=18){
	alert("Vous êtes majeur");
}
if(majeur <18){
	alert("Vous êtes mineur");
}
if((majeur >=18) && (majeur <=29)){
	alert("Vous êtes un jeune actif !!");
}
if((majeur >=30) && (majeur <=39)){
	alert("Vous êtes un trentenaire");
}
if((majeur >=40) && (majeur <=49)){
	alert("Vous êtes un quadragenaire");
}
if((majeur >=50) && (majeur <=59)){
	alert("Vous êtes un quinquagénaire");
}
if((majeur >=60) && (majeur <=69)){
	alert("Vous un sexagénaire");
}
if((majeur >=70) && (majeur <=79)){
	alert("Vous êtes un septuagénaire");
}
if((majeur >=80) && (majeur <=89)){
	alert("Vous êtes un octogénaire");
}
if (majeur >89){
	alert("vous êtes très vieux...");
}