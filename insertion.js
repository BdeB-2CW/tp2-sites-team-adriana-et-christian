 const URL_CLIENT = "https://fhtwxs151e6o4dw-db202005041702.adb.ca-montreal-1.oraclecloudapps.com/ords/scott/client/";
 
 const BOX_CAT = document.getElementById("insert");

function ins_utilisateur() {  
    //console.log(nb_client);
    let utilisateur_ins = {
    };
    utilisateur_ins.id_client = document.getElementById("id_client").value;
    utilisateur_ins.nom = document.getElementById("nom").value;
    utilisateur_ins.prenom = document.getElementById("prenom").value;
    utilisateur_ins.no_telephone = document.getElementById("no_telephone").value;
    utilisateur_ins.courriel = document.getElementById("courriel").value;
    utilisateur_ins.mot_de_passe = document.getElementById("mot_de_passe").value;
    utilisateur_ins.paiement = document.getElementById("paiement").value;
  
  
    fetch(URL_CLIENT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(utilisateur_ins),
    })
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
  }