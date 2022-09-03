alert("Bienvenido a nuestro calculador de costos de proyectos, los precios indicados aquí son estimativos y pueden verse modificados")

function costoCasa (metrosCuadrados){
    let costo= metrosCuadrados*100000
    let costoMasIVA= costo*1.21
    alert(`El costo será de ${costo}
    El costo con IVA incluido es ${costoMasIVA}`)
}

function costoQuincho (metrosCuadrados){
    let costo= metrosCuadrados*50000
    let costoMasIVA= costo*1.21
    alert(`El costo será de ${costo}
    El costo con IVA incluido es ${costoMasIVA}`)
}

function costoGalpon (metrosCuadrados){
    let costo= metrosCuadrados*60000
    let costoMasIVA= costo*1.21
    alert(`El costo será de ${costo}
    El costo con IVA incluido es ${costoMasIVA}`)
}

let opcion = Number(prompt(`Elija escribiendo el número de la opción lo que desea construir:
1.- Casa
2.- Quincho
3.- Galpón`))

switch (opcion) {
    case 1:
        let metrosCuadrados1 = Number(prompt("Indique la cantidad de metros cuadrados a construir:"))
        if (metrosCuadrados1 >= 60 && metrosCuadrados1 <= 150) {
            costoCasa(metrosCuadrados1)
        } else {
            alert("Las casas no pueden ser menores a 60 ni mayores a 120 metros cuadrados")
        }
        break;
    case 2:
        let metrosCuadrados2 = Number(prompt("Indique la cantidad de metros cuadrados a construir:"))
        if (metrosCuadrados2 >= 30 && metrosCuadrados2 <= 60) {
            costoQuincho(metrosCuadrados2)
        } else {
            alert("Los quinchos no pueden ser menores a 30 ni mayores a 60 metros cuadrados")
        }
        break;
    case 3:
        let metrosCuadrados3 = Number(prompt("Indique la cantidad de metros cuadrados a construir:"))
        if (metrosCuadrados3 >= 70 && metrosCuadrados3 <= 200) {
            costoGalpon(metrosCuadrados3)
        } else {
            alert("Los galpones no pueden ser menores a 70 ni mayores a 200 metros cuadrados")
        }
        break;
    default: alert("La opción elegida no es correcta")
        break;
}