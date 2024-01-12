//Créez un <button>, lorsque vous cliquez dessus, le contenu du json est chargé avec un fetch('your-json-file.json'), puis générez dynamiquement une <ul>liste contenant chaque règle dans un <li>.

// let fetchexo1 = () => {
//     let ul = document.getElementById('list');
//     fetch('tableau.json')
//     .then((response) => response.json())
//     .then((json) => {
//         for (let elem of json){
//             let li = document.createElement('li');
//             li.innerHTML = elem;
//             ul.append(li);
//         }
//     })
// }

// let btn = document.getElementById('button');
// btn.addEventListener('click', fetchexo1);

// Créez une nouvelle page avec une saisie de texte et un bouton. Lorsque vous cliquez sur le bouton, une requête de récupération est envoyée à l' API agify avec le nom saisi dans l'entrée. Lorsque la requête est terminée, affichez le résultat dans un nouveau div sur la page. Conservez les requêtes passées sur la page en créant un nouveau div à chaque fois que vous effectuez un appel API.

// let fetchexo2 = () =>{
//     let nom = document.getElementById('input').value;
//     let container = document.getElementById('recuperation');
//     fetch('https://api.agify.io/?name=' + nom)
//     .then((response) => response.json())
//     .then((json) => {
//         let div = document.createElement('div');
//         div.innerHTML = json.nom + " " + json.age + " " + json.count;
//         container.append(div);
//     })
// }


// let btn = document.getElementById('button');
// btn.addEventListener('click', fetchexo2);

// Étapes supplémentaires
// Ajoutez également un <select>champ contenant quelques pays, pour affiner la recherche à un pays spécifique. Vous devrez consulter la documentation agify pour en savoir plus à ce sujet.
// Stockez les résultats précédents dans un localStorage afin de ne pas avoir à les récupérer !
// Refactorisez votre projet "The collection" en utilisant json et récupérez
// Agify est en panne ? Trouvez une autre API gratuite ici : https://apilist.fun/collection/free-apis


// fetch('http://api.openweathermap.org/data/2.5/forecast?id=2800482&appid=b092dfbd427eeed434ba45afb8508f0a')
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json)
//     })
       

// let fetchexo3 = () =>{
//     let nom = document.getElementById('input').value;
//     let section = document.getElementById('citation');
//     fetch('https://api.disneyapi.dev/character?name=' + nom)
//     .then((response) => response.json())
//     .then((json) =>{
//         json.data.forEach(elem => {
//             console.log(elem.films);
//         });
//     }) 
// }


// let btn = document.getElementById('devis');
// btn.addEventListener('click', fetchexo3);


//fait avec le fetch

// let fecthexo4 = () =>{
//     let quote = document.querySelector('quote');
//     let p = document.querySelector('p');
//     let img = document.querySelector('img');
//     fetch('https://thatsthespir.it/api')
//     .then((response) => response.json())
//     .then((tableau) => {
//         quote.innerHTML = tableau.quote;
//         p.innerHTML = tableau.author;
//         img.src = tableau.photo;
//         })
//     .catch((error) => {
//         console.log(error);
//     })
// }


//fait avec le async

let fecthexo4 = async () => {
    try {
        let quote = document.querySelector('quote');
        let p = document.querySelector('p');
        let img = document.querySelector('img');

        let response = await fetch('https://thatsthespir.it/api');
        let tableau = await response.json();

        quote.innerHTML = tableau.quote;
        p.innerHTML = tableau.author;
        img.src = tableau.photo;

    } catch (error) {
        console.log(error);
    }
};




let btn = document.getElementById('devis');
btn.addEventListener('click', fecthexo4);