const URL_ARTICLE = "https://fhtwxs151e6o4dw-db202005041702.adb.ca-montreal-1.oraclecloudapps.com/ords/scott/article/";

const BOX_ARTICLE = document.getElementById("produit");

fetch(URL_ARTICLE)
    .then((resp) => resp.json())
    .then(function (data){
        let produits = data.items; //resultat de la requete REST
        return produits.map(function (article) {
            if(article.magasin_id_magasin == 6){
                let im = article.nom_article.toLowerCase().split(' ')[0];
                let divProd = document.createElement("div");
                divProd.classList.add("box-article");
                let link = "./"+article.nom_article.toLowerCase()+".html";
                let li1 = document.createElement("li");
                li1.innerHTML = `<img src='./images/produits/${im}.png' alt='${article.nom_article}' width='220'>`;
                let li2 = document.createElement("li");
                li2.classList.add("taille-item");
                li2.innerHTML = `<a href='${link}'><h2>${article.nom_article}</h2></a>`;
                let li3 = document.createElement("li");
                li3.innerHTML = `<p>CAD $${article.prix}.00</p>`;

                divProd.appendChild(li1); //inserer li1 dans la div de l'article
                divProd.appendChild(li2); //inserer l12 dans la div de l'article
                divProd.appendChild(li3); //inserer li3 dans la div de l'article
                BOX_ARTICLE.appendChild(divProd); //inserer la div  de l'article dans la div de la page du magasin
            }
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });