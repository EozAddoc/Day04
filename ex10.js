// ### **Exercice 10 : Générateur de tableau de nombres aléatoires avec statistiques**

// - Écrivez un programme qui génère un tableau contenant 50 nombres aléatoires entre 1 et 100.
// - Calculez et affichez :
//     - La moyenne des nombres.
//     - Le nombre le plus grand.
//     - Le nombre le plus petit.
//     - Le nombre de fois qu’un nombre pair apparaît.
// - Affichez les résultats dans la console.

var arr = [];
for (let i=0; i<51; i++) {
    arr.push(Math.round(Math.random()*101))
}
function minimum(t){
    if(t.length == 0){
        console.log("nothing in table")
        return "nothing in table"
    }
    min = t[0]
    for(let i=0;i<t.length; i++){
        if(t[i] < min ){
            min = t[i]
        }
    }
    console.log(`le minimum de la table est ${min}`)
    return min
}

function maximum(t){
    if(t.length == 0){
        console.log("nothing in table")
        return "nothing in table"
    }
    max = t[0]
    for(let i=0;i<t.length; i++){
        if(t[i] > max ){
            max = t[i]
        }
    }
    console.log(`le maximum de la table est ${max}`)
    return max
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

function pairCounter(t){
    pair =0
    t.forEach(x => {
        if(x % 2 ==0){
            pair ++
        }
    });
    console.log(`la nombre de chiffre pair dans la table est ${pair}`)
    

}
console.log(arr)
maximum(arr)
minimum(arr)
mean(arr)
pairCounter(arr)