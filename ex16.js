// ### **Exercice 16 : Système de votes**

// - Créez un tableau contenant une série de votes simulés, par exemple : `["Pomme", "Banane", "Orange", "Pomme", "Raisin", "Banane", "Banane"]`.
// - Écrivez un programme qui :
//     1. Compte le nombre de votes pour chaque fruit.
//     2. Affiche les résultats des votes dans la console sous forme d’objet.
//     3. Trouve le fruit gagnant (celui ayant le plus de votes).

votes = ["Pomme", "Banane", "Orange", "Pomme", "Raisin", "Banane", "Banane"]
const uniqueVotes = [...new Set(votes)]
var counts = {}


for(let i=0;i<uniqueVotes.length; i++){
  counts[uniqueVotes[i]] = 0;
  for(let j=0;j<votes.length; j++){
    if(votes[j]== uniqueVotes[i]){
      counts[uniqueVotes[i]] +=1
    }
  }
}
console.log(counts)
function fruit(nom,quantite) {
  this.nom = nom;
  this.quantite = quantite;
}
winner_count =0
winner = ""

for(let key in counts){
  if(winner_count < counts[key]){
    winner_count = counts[key]
    console.log("in here")
    winner = key
}
  key= new fruit(key, counts[key])
  console.log(key)

  
  
}
console.log("winner is : ", winner," avec " ,winner_count)

