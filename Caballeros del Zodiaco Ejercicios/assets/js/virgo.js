/* Una juguetería tiene mucho éxito en dos productos: payasos y muñecas. Suele hacer venta por  correo y la empresa de logística les cobra por paquete, así que deben calcular el peso de los paquetes que se enviaran. Cada payaso pesa 112 gramos y cada muñeca 75 gramos.

Escribe un programa que lea el número de payasos y muñecas vendidos y calcula el peso total del pedido que será enviado, considerando que el peso máximo del paquete es de 1kg.

Muestra en alertas el peso total por cada artículo
Muestra en alertas cuántos paquetes se enviaran  */
let payasos = parseInt(prompt("Escribe el número de payasos vendidos: "));
let munecas = parseInt(prompt("Escribe el número de muñecas vendidas: "));

let calcularPesoPayasos = function (payasos) {
  return payasos * 0.112;
};

let pesoTotalPayasos = calcularPesoPayasos(payasos);
alert("El peso total de los payasos es: " + pesoTotalPayasos.toFixed(2));

let calcularPesoMunecas = function (munecas) {
  return munecas * 0.075;
};

let pesoTotalMunecas = calcularPesoMunecas(munecas);
alert("El peso total de las munecas es: " + pesoTotalMunecas.toFixed(2));

let pesoTotalCombinado = pesoTotalPayasos + pesoTotalMunecas;

if (pesoTotalCombinado <= 1) {
  alert(
    "Los payasos y las munecas se enviarán en un pedido, el paquete pesa: " +
      pesoTotalCombinado.toFixed(2) +
      " kg"
  );
} else if (pesoTotalCombinado >= 1) {
  alert(
    "Los payasos y las muñecas se enviarán en: " +
      Math.ceil(pesoTotalCombinado) +
      " pedidos, el paquete pesa " +
      pesoTotalCombinado.toFixed(2) +
      " kg"
  );
}
