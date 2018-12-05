var tab = Array();
var id = 0;

//Cette fonction permet de charger les données
//et de les afficher dans le tableau
function load() {
    if (typeof localStorage != 'undefined') {
        if ('e' in localStorage) {
            //traitement
        }
    } else {
        alert("localStorage n'est pas supporté");
    }
}

$(document).ready(function () {
    load();
    $('#valider').click(function () {
        //Traitement
    });

    $('#contenu').on('click', '.delete', function () {
        //var id = parseInt( $(this).parent().index() )+1; //colonne index
        id = parseInt($(this).attr('indice'));
        alert(id);
        tab.splice(id, 1); //permet de supprimer un objet dans la position id 
        //Traitement
    });

    $('#contenu').on('click', '.update', function () {
        //var id = parseInt( $(this).parent().index() )+1; //colonne index
        id = parseInt($(this).attr('indice'));
        //Traitement
    });
});




