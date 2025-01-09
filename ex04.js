// ### **Exercice 4 : Afficher une table de multiplication**

// - Utilisez un nombre défini dans le code, par exemple : `5`.
// - Utilisez une boucle `for` pour afficher la table de multiplication de ce nombre (par exemple : `1 x 3 = 3`, `2 x 3 = 6`, ... jusqu’à `10 x 3 = 30`).

nombre =5
table_de_multiplication={}
for(let i=1;i<11; i++){
    table_de_multiplication[i] = nombre*i
}
console.log(table_de_multiplication)