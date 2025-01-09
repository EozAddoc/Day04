// ### **Exercice 7 : Calculer la moyenne d'un tableau**

// - Créez un tableau contenant plusieurs nombres.
// - Écrivez un programme qui calcule et affiche la moyenne des nombres dans le tableau.
// - Si le tableau est vide, affichez `"Le tableau est vide"`.

num_tbl = [40, 8 ,99, 13, 22, 6, 40,55, 78, 800]
tbl2=[]

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

mean(num_tbl)
mean(tbl2)