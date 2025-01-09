// ### **Exercice 18 : Récupérer la météo d’une ville**

// - Utilisez l’API [Open-Meteo](https://open-meteo.com/) (API gratuite sans clé requise) pour récupérer les prévisions météorologiques.
// - Écrivez un programme qui :
//     - Utilisez une ville prédéfinie dans le code, par exemple : `Paris` ou `New York`.
//     - Effectue une requête à l’API pour récupérer la température actuelle ou prévue.
//     - Affiche la température et les conditions météorologiques dans la console.
// - **Note :** Vous devrez convertir le nom de la ville en latitude/longitude via l’API de géocodage gratuit comme [Nominatim](https://nominatim.org/).

async function latLong(ville) {
    try {

        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${ville}&format=json&addressdetails=1&limit=1&polygon_svg=1`);
        const res = await response.json();
        const lat = res[0].lat
        const long = res[0].lon

        console.log(`coord: ${lat}`, long);
        return [lat, long]
    } catch (error) {
        console.error('Erreur:', error);
    }
}

async function meteoVille(ville) {
    try {
        const coord = await latLong(ville)
        console.log(coord, coord[0])
        url =`https://api.open-meteo.com/v1/forecast?&latitude=${coord[0]}&longitude=${coord[1]}`
        console.log(url)
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?&latitude=${coord[0]}&longitude=${coord[1]}`);
        const meteo = await response.json();

        console.log(`Setup: ${meteo[0]}`);
    } catch (error) {
        console.error('Erreur:', error);
    }
}

meteoVille("Paris");