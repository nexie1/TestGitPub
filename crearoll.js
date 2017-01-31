  function aff(id) {
    if (document.getElementById) {
      document.getElementById(id).style.visibility="visible";
    } else if (document.all) {
      document.all[id].style.visibility="visible";
    } else if (document.layers) {
      document.layers[id].visibility="visible";
    } } 
    
    function eff(id) {
    if (document.getElementById) {
      document.getElementById(id).style.visibility="hidden";
    } else if (document.all) {
      document.all[id].style.visibility="hidden";
    } else if (document.layers) {
      document.layers[id].visibility="hidden";
    } }

sur=new Image();
hors=new Image();
sur.src="boutons/portann1.gif"
hors.src="boutons/portann2.gif"
function imba(nomim,imA) { 
document[nomim].src=imA; 
} 
function imli(nomim,imB) { 
document[nomim].src=imB; 
}
var imgs = new Array("boutons/sommair1.gif", "boutons/sommair2.gif", "boutons/portann1.gif", "boutons/portann2.gif",  "boutons/adresse1.gif", "boutons/adresse2.gif", "boutons/htmljvs1.gif", "boutons/htmljvs2.gif", "boutons/banque1.gif", "boutons/banque2.gif", "boutons/bases1.gif", "boutons/bases2.gif", "boutons/feuille1.gif", "boutons/feuille2.gif", "boutons/gadget1.gif", "boutons/gadget2.gif", "boutons/logigra1.gif", "boutons/logigra2.gif", "boutons/referen1.gif", "boutons/referen2.gif", "boutons/scrjour1.gif", "boutons/scrjour2.gif", "boutons/sites1.gif", "boutons/sites2.gif" );
for( var i = 0 ; i < imgs.length ; i++ )
    {
     var tmp = imgs[ i ];
     (imgs[ i ] = new Image()).src = tmp;
    }