// ### **Exercice 17 : Récupérer une blague aléatoire**

// - Utilisez l’API [Official Joke API](h) pour récupérer une blague aléatoire.
// - Écrivez un programme qui :
//     - Effectue une requête GET à l’API.
//     - Affiche la blague dans la console sous la forme :`Setup : [question]Punchline : [réponse]`.


async function blagueAleatoire() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await response.json();

        console.log(`Setup: ${joke.setup}:  Punchline: ${joke.punchline}`);
    } catch (error) {
        console.error('Erreur lors de la récupération de la blague:', error);
    }
}

blagueAleatoire();
