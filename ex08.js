// ### **Exercice 8 : Compteur de mots**

// - Créez une chaîne de caractères contenant une phrase.
// - Écrivez un programme qui compte et affiche le nombre de mots dans cette phrase.
// - Un mot est défini comme une suite de caractères séparés par un espace.

phrase1 = "O rage O desespoir O veilleisse enemie n'ai je donc tant vecu que pour cette infamie"
phrase2 = "count two"

function countWords(phrase){
    ls = phrase.split(" ")
    console.log(ls.length)

}
countWords(phrase1)
countWords(phrase2)