alert
("Hola pequeña persona xD, Bienvenid@ al Juego de piedra, papel o tijera desarrollado por José RamirezOz que te diviertas y suerte la maquina es un poco boba... pero sshhh!! :)");
alert("ATENCION este juego es una super inteligencia artificial que se apoderada de tu....... ahhh te creas el motor de seleccion que hace que la maquina tome una decision solo es un pequeño algoritmo que genera una opcion aleatoria para la maquina")
do {
///PIEDRA PAPEL O TIJERA



///USUARIO///
var usuario = prompt("Hola, Escoje 1 de las 3 opciones |||| 1 = Tijeras |||| 2 = Papel |||| 3 = Piedra");
var Tijeras = 1;
var Papel = 2;
var Piedra = 3;

///MAQUINA///

 function juego(min, max){
    var rjuego = Math.floor(Math.random() * (max - min)) + min;


  if (rjuego===0){
    return("Tijeras");

    }

        else if (rjuego===1){
            return("Papel");

        }

        else if (rjuego===2){
          return("Piedra");

        }

        else{
            document.write("Parece que algo salio mal");
        }
}

///VALIDACION

  if (usuario == Tijeras && juego(0,3) === "Tijeras"){
      alert("Es un empate, la maquina tambien escojio tijeras :)")

  }
      else if (usuario == Tijeras && juego(0,3) === "Piedra"){
          alert("Perdiste, la maquina escojio Piedra :( ")
  }
      else if (usuario == Tijeras && juego(0,3) === "Papel"){
          alert("Ganaste, maquina escojio Papel :)")
      }



      else if (usuario == Papel && juego(0,3) === "Tijeras" ){
        alert("Perdiste, maquina escojio Tijeras :(");
      }

      else if (usuario == Papel && juego(0,3) === "Piedra"){
        alert("Ganaste, maquina escojio Piedra :)");
      }

      else if (usuario == Papel && juego(0,3) === "Papel" ){
        alert("Es un empate, maquina escojio Papel");
      }



      else if (usuario == Piedra && juego(0,3) === "Tijeras"){
        alert("Ganaste, maquina escojio Tijeras :)");
      }

      else if (usuario == Piedra && juego(0,3) === "Piedra"){
        alert("Es un empate, maquina escojio Piedra :(");
      }

      else if (usuario == Piedra && juego(0,3) === "Papel"){
        alert("Perdiste, maquina escojio Papel :(");
      }

        else{
            alert("Intenta otra vez la maquina no sabe que desion tomar, por que esta chiquita :(")
        }

} while (usuario != undefined)
