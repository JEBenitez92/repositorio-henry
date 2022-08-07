/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function ingredienteEnMalEstado(menu, comida, ingrediente) {
  // El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
  // ya que deben estar contaminados también.
  // La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
  // Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de 
  // diferencia.
  // Ej:
  /* let menuDelDia = {
      raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
      bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
      tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
  } */
  // ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
  // ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
  // En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
  // NOTA: No utilizar el método "includes".
  //
  // Tu código:
  var receta = []
  var indeice;
  for (let i = 0; i < menu[comida].length; i++) {
      if(menu[comida][i] === ingrediente){
          var indice = menu[comida].indexOf(ingrediente);
          receta.push(menu[comida][indice -= 1], menu[comida][i], menu[comida][indice += 2]);
          return receta;
      }
  
  }
  return "El menú está perfecto"

};


// No modifiques nada debajo de esta linea //

module.exports = ingredienteEnMalEstado