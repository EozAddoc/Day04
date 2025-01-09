// ### **Exercice 20 : Création et récupération de posts**

// - Utilisez l’API [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) pour interagir avec des posts.
// - Écrivez un programme qui :
//     1. Crée un nouveau post avec une requête POST.
//     2. Affiche le contenu du post créé dans la console.
//     3. Récupère une liste des 10 premiers posts via une requête GET et les affiche dans la console.


async function listeUtilisateur() {
    try {
        const testPost = {
            title: "AU Hazard",
            body: "regarde ",
            userId: 1
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(testPost)
        });

        const testPosts = await response.json();
        console.log('Post créé :', testPosts);
    } catch (error) {
        console.error('Erreur lors de la récupération de la blague:', error);
    }
}


listeUtilisateur();