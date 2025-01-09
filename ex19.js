// ### **Exercice 19 : Liste des utilisateurs**

// - Utilisez l’API [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) pour récupérer une liste d’utilisateurs.
// - Écrivez un programme qui :
//     - Récupère les informations des utilisateurs via une requête GET.
//     - Affiche dans la console les noms et emails de chaque utilisateur sous la forme :`Nom : [nom], Email : [email]`.



async function listeUtilisateur() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        for(let i=0;i<users.length; i++){
            console.log(`Nom: ${users[i].username} , Email: ${users[i].email}`);
          }

    } catch (error) {
        console.error('Erreur lors de la récupération de la blague:', error);
    }
}


listeUtilisateur();