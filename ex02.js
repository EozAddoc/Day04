// ### **Exercice 2 : Vérifier un nombre pair ou impair**

// - Créez une variable `nombre` et assignez-lui une valeur.
// - Utilisez un `if` pour vérifier si le nombre est pair ou impair.
// - Affichez `"Le nombre est pair"` ou `"Le nombre est impair"` dans la console.

var nombre = 10;
if (nombre % 2 === 0) {
  console.log(`Le nombre ${nombre} est pair`);
} else {
  console.log(`Le nombre ${nombre} est impair`);
}