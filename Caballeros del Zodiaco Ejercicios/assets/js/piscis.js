"use strict"
/* Crea un programa que emule las funciones de un cajero automático.

Considera lo siguiente:

El cajero solo cuenta con $10,000 de saldo.
Cada transacción se descontará del saldo del cajero.
Se debe tener una función para consultar el saldo del cajero
 */

let dineroCajero = 10000;
let temp = 0;

while (temp != 3) {
  let transacion = prompt(
    "Menú Cajero: \n 1) Escriba 1 para retirar \n 2) Escriba 2 para consultar saldo \n 3) Escriba 3 para terminar operación"
  );

  switch (transacion) {
    case "1":
      let retiro = parseInt(
        prompt(
          "Escriba la cantidad a retirar, máximo " + dineroCajero + " pesos"
        )
      );
      if (retiro % 1 == 0 && retiro >= 1 && retiro <= dineroCajero) {
        alert("Se retira " + retiro + "pesos");
        dineroCajero = dineroCajero - retiro;
      } else {
        alert(
          "La cantidad no es un entero o no se cuenta con el saldo suficiente, saldo disponible: " +
            dineroCajero
        );
      }
      break;

    case "2":
      alert("Saldo disponible en cajero: " + dineroCajero);
      break;

    case "3":
      alert("Fue un gusto atenderle");
      temp = 3;
      break;

    default:
      alert("Opción no válida");
  }
}


