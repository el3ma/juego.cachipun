let btnPiedra = document.getElementById("piedra");
let btnPapel = document.getElementById("papel");
let btnTijera = document.getElementById("tijera");
let resultado = document.getElementById("resultado");
let eleccionUsuario = document.getElementById("eleccionUsuario");
let eleccionMaquina = document.getElementById("eleccionMaquina");
let ganados = document.getElementById("ganados");
let perdidos = document.getElementById("perdidos");
let empatados = document.getElementById("empatados");
let opciones = ["Piedra", "Papel", "Tijera"];



function main(){

    let juegosGanados = 0;
    let juegosPerdidos = 0;
    let juegosEmpatados = 0;
    let juegosTotales = 0;

    const jugadaMaquina = () =>{
        let opcionMaquina = opciones[Math.floor(Math.random() * 3)];
        return opcionMaquina
    };
    
    function opcionesResultado(opcionUsuario, opcionMaquina){
        if(opcionUsuario == opcionMaquina){
            juegosEmpatados ++
            return 'Esto es un empate'
        }else if((opcionUsuario == "Piedra" && opcionMaquina == "Tijera") || 
                (opcionUsuario == "Papel" && opcionMaquina == "Piedra") || 
                (opcionUsuario == "Tijera" && opcionMaquina == "Papel")){
                    juegosGanados ++
                return 'Ganaste!'
        }else{
            juegosPerdidos ++
            return 'Perdiste esta vez'
        }
            
    }

    function contadorJuegos(juegosGanados, juegosPerdidos, juegosEmpatados, juegosTotales){
        ganados.innerText = `${juegosGanados}`;
        perdidos.innerText = `${juegosPerdidos}`;
        empatados.innerText = `${juegosEmpatados}`;
    }

    function juegoResultado(resultadoJugada, opcionUsuario, opcionMaquina){
        resultado.innerText = `${resultadoJugada}`;
        eleccionMaquina.innerText = `${opcionMaquina}`;
        eleccionUsuario.innerText = `${opcionUsuario}`;
    }
    
    btnPiedra.addEventListener("click", function(){
        const opcionUsuario = "Piedra";
        const opcionMaquina = jugadaMaquina();
        const resultadoJugada = opcionesResultado(opcionUsuario, opcionMaquina);
        juegoResultado(resultadoJugada, opcionUsuario, opcionMaquina);
        contadorJuegos(juegosGanados, juegosPerdidos, juegosEmpatados)
    });

    btnPapel.addEventListener("click", function(){
        const opcionUsuario = "Papel";
        const opcionMaquina = jugadaMaquina();
        const resultadoJugada = opcionesResultado(opcionUsuario, opcionMaquina);
        juegoResultado(resultadoJugada, opcionUsuario, opcionMaquina);
        contadorJuegos(juegosGanados, juegosPerdidos, juegosEmpatados)
    });

    btnTijera.addEventListener("click", function(){
        const opcionUsuario = "Tijera";
        const opcionMaquina = jugadaMaquina();
        const resultadoJugada = opcionesResultado(opcionUsuario, opcionMaquina);
        juegoResultado(resultadoJugada, opcionUsuario, opcionMaquina);
        contadorJuegos(juegosGanados, juegosPerdidos, juegosEmpatados)
    })
}

main();