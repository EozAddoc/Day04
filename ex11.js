// ### **Exercice 11 : Découverte de JSON (simple)**

// - Créez un objet `livre` contenant les propriétés suivantes :
//     - `titre` : "Le Petit Prince"
//     - `auteur` : "Antoine de Saint-Exupéry"
//     - `annee` : 1943
//     - `disponible` : `true`
// - Écrivez un programme pour :
//     - Afficher toutes les propriétés et leurs valeurs dans la console.
//     - Modifier la propriété `disponible` pour la mettre à `false`.
//     - Ajouter une nouvelle propriété `langue` avec la valeur `"Français"`.
//     - Afficher l’objet mis à jour dans la console.

const livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    annee: 1943,
    disponible: true
  };

const x = livre
console.log(`le livre ${x.titre} de l'auteur ${x.auteur} ecris en ${x.annee} , la disponibilié est ${x.disponible}`) 
x.disponible = false
x.langue = "Francais"
console.log(`le livre ${x.titre} de l'auteur ${x.auteur} ecris en ${x.annee} , la disponibilié est ${x.disponible} et ecris en ${x.langue}`) 
