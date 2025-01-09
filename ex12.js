// ### **Exercice 12 : Manipulation d’objets (JSON)**

// - Créez un objet `personne` contenant les propriétés suivantes :
//     - `nom` : "Alice"
//     - `age` : 30
//     - `adresse` : un objet avec `rue`, `ville`, et `codePostal`
//     - `hobbies` : un tableau de passe-temps (par exemple, `["Lecture", "Natation", "Voyages"]`).
// - Écrivez un programme pour :
//     - Afficher les valeurs de toutes les propriétés de l’objet.
//     - Ajouter un nouveau passe-temps à la liste des hobbies.
//     - Modifier l’âge de la personne.
//     - Supprimer la propriété `codePostal` de l’adresse.

const personne = {
    nom: "Alice",
    age: 30,
    adresse: {
        rue:"Edouard Detaille",
        ville:"Nanterre",
        codePostal:"75008"
    },
    hobbies: ["Lecture", "Natation", "Voyages"]
  };
console.log(personne)
personne.hobbies.push("chorale")
personne.age=31
delete personne.adresse.codePostal
console.log(personne)



