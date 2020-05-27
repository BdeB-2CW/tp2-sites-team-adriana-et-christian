const URL_MAGASIN = "https://fhtwxs151e6o4dw-db202005041702.adb.ca-montreal-1.oraclecloudapps.com/ords/scott/magasin/";

const BOX_ASIDE = document.getElementById("apropos"); //USAR ESSE

fetch(URL_MAGASIN)
    .then((resp) => resp.json())
    .then(function (data){
        let magasins = data.items; //resultat de la requete REST
        return magasins.map(function (magasin) {
            if(magasin.id_magasin == 6){
                let paragraph = document.createElement("p");
                paragraph.innerHTML = `${magasin.description}`;
                BOX_ASIDE.appendChild(paragraph);

            }
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });