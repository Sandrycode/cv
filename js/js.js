// MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible == false){ //si está oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

// OCULTAR EL MENÚ UNA VEZ SE SELECCIONE UNA OPCIÓN
let links = document.querySelectorAll("nav a");
for (var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

// CREACIÓN DE BARRAS SECCIÓN 'HABILIDADES'
function crearBarra(id_barra){
    for(i=0;i<=16;i++){      // cambia esto <=16 depende los cuadritos que quieras salen 17
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


//SELECCIONO TODAS LAS BARRAS GENERALES PARA LUEGO MANIPULARLAS
let html = document.getElementById("html");
crearBarra(html);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);

let python = document.getElementById("python");
crearBarra(python);

let sql = document.getElementById("sql");
crearBarra(sql);

let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);


// COLOREAMOS LAS BARRITAS EN CADA SEGMENTO
let contadores = [-1, -1, -1, -1, -1, -1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById('habilidades');
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 15, 1, intervalJavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 13, 2, intervalWordpress);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 15, 3, intervalPython);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 14, 4, intervalSql);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 14, 5, intervalPhotoshop);
        },100);
    }
}

// LLENO LA BARRA CON LA CANTIDAD INDICADA
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores [indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

// DETECTO EL SCROLLING DEL MOUSE PARA APLICAR lLA ANIMACIÓN DE LA BARRA
window.onscroll=function(){
    efectoHabilidades();
}
