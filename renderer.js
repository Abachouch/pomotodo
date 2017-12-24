//the shadow doom of root div whichis the template's main
var shadow = document.getElementById('root').createShadowRoot();

// showing home view .
function showHome(){
    var importedDoc = document.getElementById('homeImport').import;
    shadow.innerHTML = importedDoc.getElementById('homeTemplate').innerHTML ;
}

document.onload = init();

function init() {
    showHome() ;
}