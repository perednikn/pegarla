const array = ["Construcción de material",
 " Contenidos en cuarentena",
 " Cuarentena y la comedia",
 " Inspiración",
 "Nueva circuito",
 "Distanciamiento",
 "hecklers",
 "Hacer reir con miedo",
 "Teatros",
 "Volanteo",
 "Clubes de comedia",
 "Twitch ",
 "Tiktok",
 "Relaciones personales",
 "Iine up de rotativos",
 "Cabalas",
 "Antes de subir",
 "Feminismo",
 "promoción de shows en redes",
 "traccion de publico",
 "Plata en la comedia",
 "Pasar la gorra",
 "Actuar con mozos ruidosos",
 "Probar material",
 "Competencia con otros comediantes",
 "Actuar cuando llegó la cuenta",
 "Drogas y alcohol",
 "Chismes/Rumores",
 "Mente en blanco (en el escenario)",
 "hoja en blanco (en casa)",
 "Funciones de mierda",
 "Robo de material",
 "Ganarse al publico",
 "Perder al público",
 "Público enojado",
 "Consejos (recibidos)",
 "Chiste igual al de otro",
 "Hacer contenido en redes para el show",
 "subir material a redes",
  ]

  function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
/* 
let numero = random(1, array.length)
console.log(numero)
document.body.innerHTML = `<h1> ${array[numero]}</h1>` */

const boton = document.getElementById("boton");




function pegarla(){
    
    console.log("tuki")
    let limite = array.length - 1;
    let i = Math.floor((Math.random() * (limite - 1 + 1)) + 1);
    document.getElementById("charlemosDe").innerHTML = `<div class="card">
    <h2>${array[i]}</h2>
</div>`
}