var tab = Array();
var id = 0;

//Cette fonction permet de charger les données
//et de les afficher dans le tableau
function load() {
    if (typeof localStorage != 'undefined') {
        if ('e' in localStorage) {
            //traitement
            var eJson = localStorage.getItem('e');
            var eJava = JSON.parse(eJson);
            tab = eJava;
            var contenu = $('#contenu');
            var ligne ='';
            tab.forEach(e=>{
                ligne+='<tr><td>'+e.nom+'</td><td>'+e.prenom+'</td><td>'+e.email+'</td><td></td><td></td></tr>';
            });
            contenu.html(ligne);
        }
    } else {
        alert("localStorage n'est pas supporté");
    }
}

$(document).ready(function () {
    load();
    $('#valider').click(function () {
        //Traitement
        var e = {
            nom:$('#nom').val(),
            prenom:$('#prenom').val(),
            email: $('#email').val()
        };
        tab.push(e);
        localStorage.setItem('e', JSON.stringify(tab));
        load();
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




