// ### **Exercice 5 : Remplacement dans une chaîne**

// - "Utilisez une phrase prédéfinie dans le code, par exemple : `Bonjour tout le monde !`."
// - Écrivez un programme qui :
//     - Utilisez un mot à remplacer et un mot de remplacement définis dans le code.
//     - Remplace toutes les occurrences du mot dans la phrase.
//     - Affiche la nouvelle phrase dans la console.

phrase1 = "Bonjour tout le monde !"
function replaceWord(phrase, word, new_word) {
    new_phrase = phrase.replace(word,new_word)
    console.log(new_phrase)
  }
replaceWord(phrase1, "le", "la")