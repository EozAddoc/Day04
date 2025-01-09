// ### **Exercice 15 : Gestion d’un panier d’achats**

// - Créez un tableau `panier` contenant des objets représentant des articles, avec les propriétés :
//     - `nom` : nom de l'article.
//     - `prix` : prix unitaire.
//     - `quantite` : nombre d’articles achetés.
// - Écrivez un programme pour :
//     - Calculer et afficher le prix total de tous les articles dans le panier.
//     - Ajouter un nouvel article au panier.
//     - Supprimer un article spécifique du panier (en le cherchant par son nom).

function produit(nom,prix, quantite) {
    this.nom = nom;
    this.prix = prix;
    this.quantite = quantite;
  }

banana = new produit("Banana", 2, 30)
gel_douche = new produit("Gel Douche", 20, 60)
lait = new produit("Lait", 3, 16)
pomme = new produit("Pomme", 20, 5)

panier = [banana,gel_douche, lait, pomme]
prix_totale =0
for(let i=0;i<panier.length; i++){
    prix_totale += panier[i].prix
}
console.log("le panier avant tous les changements : " ,panier)

radis = new produit("Radis", 3, 5)
panier.push(radis)

let x = panier.indexOf(lait)
panier.splice(x,1)
console.log("le prix totale est : ", prix_totale)
console.log("le panier apres apres avoir enlever lait et rajouter radis: ", panier)
