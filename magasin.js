const URL = "https://fhtwxs151e6o4dw-db202005041702.adb.ca-montreal-1.oraclecloudapps.com/ords/scott/magasin/";

const BOX_CAT = document.getElementById("categories");

fetch(URL)
    .then((resp) => resp.json())
    .then(function (data){
        let magasins = data.items; //resultat de la requete REST
        return magasins.map(function (magasin) {
            let divCat = document.createElement("div");
            let link = "./"+magasin.nom_magasin.toLowerCase()+".html";
            divCat.classList.add("box-cat");
            divCat.innerHTML = `<img src='./images/magasin.png' alt='${magasin.nom_magasin}' width='150'><a href='${link}'><h2>${magasin.nom_magasin}</h2></a>`;
            BOX_CAT.appendChild(divCat);

        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });
