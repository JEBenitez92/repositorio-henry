/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function mayorMenosMenor(arr) {
  // Obtener del array "arr" el número mayor y el menor. Devuelve la resta entre los mismos
  // NOTA: No utilizar los métodos "min" y "max" de "Math".
  //
  // Tu código:
  var Mayor = 0;
    var Menor = arr[0];
    var resta = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i] < Menor) {
            Menor = arr[i] }
        if(arr[i] > Mayor) {
            Mayor = arr[i]
        }
    }
        resta = Mayor -= Menor;
    return resta;
}

// No modifiques nada debajo de esta linea //

module.exports = mayorMenosMenor