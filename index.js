let pilotName = prompt("Qual seu nome, piloto?")

let velocity = 0

let newVelocity = prompt("Qual velocidade você gostaria de acelerar?")

let confirmVelocity = confirm("Estamos acelerando para: " + newVelocity + "km/s")


if(confirmVelocity) {
    velocity = newVelocity
}

if(velocity <= 0){
    alert("A nave está parada")
} else if (velocity <= 40){
    alert("A nave está devagar")
} else if (velocity <= 80) {
    alert ("Boa velocidade para manter")
} else if (velocity < 100) {
    alert ("Velocidade alta")
} else {
    alert ("Velocidade perigosa. Controle automático forçado")
}

alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "km/s")