let saludPlayer = 50;
let saludComputador = 50;
let round = 0;
let player = prompt("caballero o samurai (escribelo)") //"caballero" 
const HEAVY = 30;
const LIGHT = 20;



if (player == "caballero") {
    alert ("elegiste"+ " " + player)    
    console.log ("Elegiste" + " " + player)
    computador = "samurai"
    alert ("duelo contra"+ " " + computador)
}
else if (player == "samurai") {
    alert ("elegiste"+ " " + player)
  
    console.log ("Elegiste" + " " + player)
    computador = "caballero"
    alert ("duelo contra"+ " " + computador)
}

else {
    alert("no es combatiente")
    console.log("elegiste arruinar mi dia,recargar pagina ")

}

alert ("Ves a un"+ " " + computador + " "+ "listo para el combate, tu primer movimiento sera...!")


while (saludPlayer > 0 && saludComputador > 0) {

   let ataque = prompt("Elige: A ataque Fuerte, B contra Ataque, C amague y Ataque (letra en minuscula)");
    switch (ataque) {
        case "a":
            turnoPlayer = 2
            console.log("Ataque Fuerte")

            break;
        case "b":
            turnoPlayer = 3
            console.log("Contra Ataque")

            break;
        case "c":
            turnoPlayer = 4
            console.log("Amague Y Ataque")

            break;

        default:
            break;
    }
    let turnoCompu = parseInt(Math.random() * 4) + 1;
    //let turnoPlayer = parseInt(Math.random() * 4) + 1;
    let golpeComputador = parseInt(Math.random() * ((HEAVY - LIGHT) + HEAVY))
    let golpePlayer = parseInt(Math.random() * ((HEAVY - LIGHT) + HEAVY));

    round += 1;
    console.log("---round " + round + "----")

    if (turnoCompu == turnoPlayer) {
        console.log("Parry");
        alert("Parry! Han Chocado espadas y se miran fijamente!")
    }
    else if (turnoCompu > turnoPlayer) {
        saludPlayer -= golpeComputador;
        if (saludPlayer < 0) { saludPlayer = 0; }
        alert (computador+ " " +"te ha herido")
    }
    else if (turnoPlayer > turnoCompu) {
        saludComputador -= golpePlayer;
        if (saludComputador < 0) {
            saludComputador = 0;
        }
        alert ("Has herido a "+ " "+computador )
    }
    if (saludPlayer < 10 ){alert("Estas mal herido")}
    else if (saludComputador < 10){alert(computador+""+ "esta mal herido")}

    console.log(turnoCompu + "compu");
    console.log(turnoPlayer + "player");
    console.log(" salud player " + saludPlayer);
    console.log(" salud compu " + saludComputador)
    console.log("----------------------------------")
}

if (saludPlayer > 0){ 
    alert("Has derrotado a" +" "+ computador +" " + ". Limpias tu espada y continuas tu camino...")
    console.log("¡victoria "+ player+ "!")

}
else{  
    console.log("Derrotado en Ronda n°" + round)
}
