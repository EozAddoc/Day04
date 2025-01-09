// ### **Exercice 6 : Trouver le minimum et le maximum dans un tableau**

// - Créez un tableau contenant au moins 10 nombres différents.
// - Écrivez un programme pour trouver et afficher le nombre minimum et maximum du tableau.
// - Ne pas utiliser de fonctions intégrées comme `Math.min()` ou `Math.max()`.

num_tbl = [40, 8 ,99, 13, 22, 6, 40,55, 78, 800, 8]
tbl2=[]
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
minimum(num_tbl)
maximum(num_tbl)
minimum(tbl2)
maximum(tbl2)