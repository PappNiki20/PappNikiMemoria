import { KEPEKLISTA } from "./adat.js";

$(function () {
  const ELEM = $(`article`);
  let txt = osszeallit(KEPEKLISTA);
  ELEM.append(txt);
  megFordit();
  ELEM.on("click", kattintas);
});

function osszeallit(KEPEKLISTA) {
  let txt = "";
  let index = 0;
  let id = 0;
  for (index = 0; index < KEPEKLISTA.length; index++) {
    txt += `<div> <img id="${id}" src= '${KEPEKLISTA[index]}' " alt=""></div>`;
    id++;
  }
  return txt;
}
function megFordit() {
  const ELEM = $("article img");
  console.log(ELEM);
  ELEM.attr("src", "memo-master/kepek/hatter.jpg");
}
function kattintas() {
  let db = 0;
  let kepId = [""];
  let aktELEM = $(event.target).attr("id");
  if (db === 2) {
    kepId = [""];
    $(event.target).attr("src", "memo-master/kepek/hatter.jpg");
  } else {
    $(event.target).attr("src", KEPEKLISTA[aktELEM]);
    kepId += aktELEM;
    console.log(KEPEKLISTA[aktELEM]);
    return kepId;
    db += 1 ;
    
  }
  function torol() {
    let lista = kattintas();

    if (lista[0] === lista[1]) {
    } else {
      $(event.target).attr("src", "memo-master/kepek/hatter.jpg");
    }
  }
 
}

/*
1 html összeállítása
2 css formázva, 4 kép egymás mellett
3 függvény összeállítása(lista)- visszatérési érték: txt-article tagbe
4 eseménykezelő kell a képekre, ami kicseréli a hátteret kattintásra, késleltetésre
5 ha két ugyanolyan van, akkor a pontok növelése, és tűnjön el a két kép


$(function () {
  console.log("betöltődés után");
  setTimeout(function(){
    console.log("1000 ms múlva");
  },1000);
  
  
});
function amitvegrekellhajtania(){
    console.log("1000ms után");
}
let i =0;
setInterval(function(){

}),

console.log("betöltés előtt");
*/
