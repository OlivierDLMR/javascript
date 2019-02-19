console.log('Script index.js chargé !')


// Création d'un fonction qui va faire le traitement
// Ainsi dans l'input "age" dans le html l'attribue onchange va appellé cette fonction
let checkAge = function() {
	var age = document.getElementById("age").value;
	var contentMessageHtml = document.getElementById("messageInfo");
	// On vide le message au cas il y en a un...
	contentMessageHtml.innerHTML = "";
	// Ici on récupére le type de la valeur. On convertit si nécessaire la variable en nombre bien que un input type number peut le faire
	var type = typeof(age); // Conseille d'utiliser Number(age) et/ ou <input id="age" type="number" onchange="checkAge()">
	// On doit vérifié que la consigne a été respectée
	console.log('type de la variable age : ', type);
	// Ici nous pouvons doubler la condition pour vérifier et séparer le traitement
	if(age >=18 && age <=80) {
		// J'affiche le bon respect des consignes
		contentMessageHtml.innerHTML = "Consignes respectées.";
		// Ici comme les consignes sont respectées nous pouvons analyser le résultat
		if(age == 18 ){ // Si la valeur est strictement égale à 18
			// J'ajoute au message une information en rappport à son résultat
			contentMessageHtml.innerHTML += "Vous êtes un tout juste majeur !!";
		} else if(age >18 && age <=29){ // Si la valeur est plus grande que 18 et plus petite ou égale à 29
			// J'ajoute au message une information en rappport à son résultat
			contentMessageHtml.innerHTML += "Vous êtes un jeune actif !!";
		} else if(age >=30 && age <=39){ // Si la valeur est plus grande ou égale à 30 et plus petite ou égale à 29
			// J'ajoute au message une information en rappport à son résultat
			contentMessageHtml.innerHTML += "Vous êtes un trentenaire !";
		} else if((age >=40) && (age <=49)){ // Si la valeur est plus grande ou égale à 40 et plus petite ou égale à 49
			// J'ajoute au message une information en rappport à son résultat
			contentMessageHtml.innerHTML += "Vous êtes un quadragenaire !";
		} else if((age >=50) && (age <=59)){ // Si la valeur est plus grande ou égale à 50 et plus petite ou égale à 69
			// J'ajoute au message une information en rappport à son résultat
			contentMessageHtml.innerHTML += "Vous êtes un quinquagénaire !";
		} else if((age >=60) && (age <=69)){ // Si la valeur est plus grande ou égale à 60 et plus petite ou égale à 69
			// J'ajoute au message une information en rappport à son résultat
			contentMessageHtml.innerHTML += "Vous un sexagénaire !";
		} else if((age >=70) && (age <=79)){ // Si la valeur est plus grande ou égale à 70 et plus petite ou égale à 79
			// J'ajoute au message une information en rappport à son résultat
			contentMessageHtml.innerHTML += "Vous êtes un septuagénaire !";
		} else if(age == 80){ // Si la valeur est strictement égale à 80
			// J'ajoute au message une information en rappport à son résultat
			contentMessageHtml.innerHTML += age + " ans ca se fête, vous etes octogénaire !";
		} 
	} else {
		// Ici j'affiche le non respect des consignes, et je peux gérer les erreurs
		contentMessageHtml.innerHTML = "Vérifiez les consignes SVP, la valeur " + age + " n'est pas correct. ";
		if (age > 80) {
			if (age > 130) { // On peut analyser d'avantage de type d'erreur en cherchant une valeur...
				contentMessageHtml.innerHTML += "C'est encore possible d'être debout à votre âge !!!";
			} else {
				contentMessageHtml.innerHTML += "Trop vieux !!!";
			}
		} else if (age < 18) {
			if (age < 0) {
				contentMessageHtml.innerHTML += "Un âge négatif !!! On aura tout vu !!!";
			}else {
				contentMessageHtml.innerHTML += "Pas de bébé ici !!!";
			}
		}  else {
			if (type != "number" ) {
				contentMessageHtml.innerHTML += "Un chiffre c'est un chiffre !!!";
			} else {
				contentMessageHtml.innerHTML += "Voila un cas que l'on avait pas prévu !!!";
			}
		}
	}
}