// ### **Exercice 14 : Recherche dans un tableau d'objets**

// - Créez un tableau `etudiants` contenant plusieurs objets, chacun représentant un étudiant avec les propriétés :
//     - `nom` : nom de l'étudiant.
//     - `age` : âge de l'étudiant.
//     - `note` : note finale (sur 20).
// - Écrivez un programme pour :
//     - Trouver l’étudiant ayant la meilleure note.
//     - Afficher les noms des étudiants ayant une note supérieure ou égale à 15.
//     - Calculer la moyenne des notes de la classe.

function etudiant(nom,age,note) {
    this.nom = nom;
    this.age = age;
    this.note = note;
  }

sarah = new etudiant("Sarah", 22, 15)
luke = new etudiant("Luke", 17, 10)
mark = new etudiant("Mark", 12, 16)
hestia = new etudiant("Hestia", 12, 5)

etudiants = [sarah, luke, mark,hestia]
for(let i=0;i<etudiants.length; i++){
    if(etudiants[i].note >= 15 ){
        console.log(`${etudiants[i].nom} has a better note than 15 `)
    }
}
notes = []
for(let i=0;i<etudiants.length; i++){
    notes.push(etudiants[i].note)
}
function mean(t){
    if(t.length == 0){
        console.log("Le tableau est vide")
        return "Le tableau est vide"
    }
    sum =0
    t.forEach(x => {
        sum += x   
    });
    moyenne = sum/t.length
    console.log(`la moyenne de la table est ${moyenne}`)
    return moyenne
}
mean(notes)