//====================================
//=============VARIABLES==============
//====================================

//Asignamos variables:
var piedra = 0;
var papel = 1;
var tijeras = 2;
//El array sirve para asignar una cadena de texto a cada valor:
var opciones = ["piedra", "papel", "tijeras"];


//Opción del usuario y la máquina:
var opcionUsuario; //Para elegir el valor de usuario, ver la seccción "JUEGO"
var opcionMaquina;

//Estas variables son para el contador:
var victoriasUsuario = 0;
var victoriasMaquina = 0;

var contador = 0;

//Estas variables son para el turno:
var turno = 1;



//===================================
//==============JUEGO================
//===================================

var juego = true; //Si está en 0, entramos al bucle de juego.
while (juego == true) {

	while ( (!(victoriasUsuario >= 3)) && (!(victoriasMaquina >= 3)) ) { //Si llevas entre 3 victorias y 3 derrotas, puedes jugar.

		//==========================================================
		//LO QUE ELIGE EL USUARIO
		if (turno == 1) { //Si acabas de comenzar a jugar
			opcionUsuario = prompt("¡Vamos a jugar a piedra papel tijeras!\n¡El que gane tres veces gana la partida!\n\n¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijeras: 2", 0);
		}
		else { //Cuando ya has jugado 1 turno
			opcionUsuario = prompt("Turno " + turno + ".\n\n" + "¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijeras: 2", 0);
		}

		//LO QUE ELIGE LA MÁQUINA
		opcionMaquina = aleatorio(0,2);

		function aleatorio(minimo, maximo){
			numero = Math.floor(Math.random() * (maximo-minimo+1) +minimo);
			return numero;
		}
		//==========================================================


		//ELECCIONES, SOLO SI SE ELIGE VALOR VÁLIDO
		if ( (opcionUsuario <= 2) && (!(opcionUsuario == undefined)) ) { //Si el usuario elige una opción válida
			alert("Elegiste "+opciones[opcionUsuario]+".");
			alert("Tu contrincante eligió "+opciones[opcionMaquina]+".");

			//Condiciones para ganar, perder o empatar
			if (opcionUsuario == opcionMaquina) {
				alert("¡Empate!");
			}
			else if (((opcionUsuario == piedra) && (opcionMaquina == papel)) ||
					 ((opcionUsuario == papel) && (opcionMaquina == tijeras)) ||
					 ((opcionUsuario == tijeras) && (opcionMaquina == piedra))) {
				victoriasMaquina++; //Suma una victoria a la máquina
				alert("¡Perdiste!");
			}

			else if (((opcionUsuario == piedra) && (opcionMaquina == tijeras)) ||
					 ((opcionUsuario == papel) && (opcionMaquina == piedra)) ||
					 ((opcionUsuario == tijeras) && (opcionMaquina == papel))) {
				victoriasUsuario++; //Suma una victoria al usuario
				alert("¡Ganaste!");
			}
			//contador = victoriasUsuario - victoriasMaquina;
			alert("Turno " + turno + ".\n\nVictorias: " +victoriasUsuario + "\nDerrotas " + victoriasMaquina);
			turno++; //Siguiente turno
		}
		else if (opcionUsuario > 3) { //Si eliges un valor no válido como "3"
				alert("Opción no válida.\nPor favor, elija un valor entre el 0 y el 2.");
			}
		else { //Si el usuario elige cancelar, sales del ciclo
			opcionUsuario = undefined;
			break;
		}
		//VUELVE A ELECCIONES HASTA QUE HAYA 3 VICTORIAS O 3 DERROTAS

	} //FIN DEL BUCLE


	//========================CANCELAR===========================
		if (opcionUsuario == undefined) { //Si has elegido "cancelar", sales del juego
			break;
		}


	//========================RESULTADOS===========================
	
	//Solo pongo estas variables a 0 si es la primera vez que se juega
	if ( (!(victoriasTotales > 0)) && (!(derrotasTotales > 0)) ) {
		var victoriasTotales = 0;
		var derrotasTotales = 0;
	}

	//Enseñar si ganaste o perdiste
	if ( (victoriasUsuario == 3) ) { //Si has ganado la partida
		alert("¡FELICIDADES!\n\n¡Has vencido!");
		victoriasTotales++;
	}
	else { //Si has perdido la partida
		alert("¡Lo siento!\n\n¡Has sido derrotado!");
		derrotasTotales++;
	}

	//Enseñar resultados
	if ( victoriasTotales > derrotasTotales) { //Vas ganando
		alert("El resultado es:\n\nVictorias: " + victoriasTotales + "\nDerrotas: " + derrotasTotales + "\n\nTe ha llevado: " + turno + " turnos.\n\n¡No tendrás tanta suerte a la próxima!");
	}
	else if ( victoriasTotales == derrotasTotales) { //Vas empatado
		alert("El resultado es:\n\nVictorias: " + victoriasTotales + "\nDerrotas: " + derrotasTotales + "\n\nTe ha llevado: " + turno + " turnos.\n\n¿Una de desempate?");
	}
	else if ( victoriasTotales < derrotasTotales) { //Vas perdiendo
		alert("El resultado es:\n\nVictorias: " + victoriasTotales + "\nDerrotas: " + derrotasTotales + "\n\nTe ha llevado: " + turno + " turnos.\n\n¡No te rindas, aún puedes remontar!");
	}

	//=================PARA VOLVER A JUGAR========================
	
	//Lo reseteamos todo:
	victoriasUsuario = 0;
	victoriasMaquina = 0;
	
	var volverAJugar = confirm("Pulsa OK para volver a jugar.");
	if (volverAJugar == true) {
		juego = true;
	}
	else {
		juego = false;
	}
	turno = 1;
	
} //FIN DEL BUCLE DE JUEGO
