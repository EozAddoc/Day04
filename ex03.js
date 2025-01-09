// ### **Exercice 3 : Analyse d’un tableau dynamique**

// - Utilisez une série de nombres définie dans le code, par exemple : `10, 20, 30, 40`.
// - Écrivez un programme qui :
//     - Convertit cette chaîne en un tableau.
//     - Affiche dans la console :
//         - Le nombre total d’éléments.
//         - La somme de tous les nombres.
//         - La moyenne des nombres.
//         - Le nombre d’éléments supérieurs à la moyenne.

serie_de_nombres = "10, 20, 30, 40";
tableau_de_nombres = serie_de_nombres.split(", ");
for(let i=0;i<tableau_de_nombres.length; i++){
    tableau_de_nombres[i] = parseInt(tableau_de_nombres[i])
}
console.log(`tableau_de_nombres a une taille de ${tableau_de_nombres.length}`)
sum =0
tableau_de_nombres.forEach(x => {
    sum += x   
});
mean = sum/tableau_de_nombres.length
console.log(`tableau_de_nombres a une somme de ${sum}`)
console.log(`tableau_de_nombres a une moyenne de ${mean}`)
sup_mean = 0
tableau_de_nombres.forEach(x => {
    if(x > mean){
        sup_mean += 1  
    }
});
console.log(`tableau_de_nombres a ${sup_mean} nombres superieur a la moyenne `)
