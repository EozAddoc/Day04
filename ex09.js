// ### **Exercice 9 : Trier un tableau (ordre croissant)**

// - Créez un tableau contenant plusieurs nombres dans un ordre aléatoire.
// - Implémentez un algorithme pour trier le tableau en ordre croissant (par exemple, tri par sélection ou tri à bulles).
// - Affichez le tableau trié.

tbl1 = [40, 8 ,99, 13, 22, 6, 40,55, 78, 800]
tbl2=[]
tbl3=[23, 14, 78, 9]

function sortTable(tbl){
 var sorted = tbl.sort((a,b)=> a-b)
 return sorted
}
console.log(sortTable(tbl1))
console.log(sortTable(tbl2))
console.log(sortTable(tbl3))