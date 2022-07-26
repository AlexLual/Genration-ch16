USE sakila;
-- SUM (), AVG (), COUNT()
SELECT customer_id, amount FROM payment;


-- COUNT  cuenta las filas de una tabla
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;
SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;

-- cantidad de rentas que tuvo el trabajador 2
SELECT COUNT(*) FROM payment WHERE staff_id = 1;

-- cantidad de clientes distintos 
SELECT COUNT (DISTINT customer_id) FROM payment;
-- SUM()
SELECT SUM(amount) AS 'Total de rentas' FROM payment;
SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id =2;

-- ¿CUAL cliente realizo mas rentas ?
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC ;

-- GROUP BY
-- ORDER BY - ORDENA SEGUN LA COLUMNA O FUNCION QUE LE INDICQUEMOS ASC/DESC

SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;
 
 -- AVG REGRESA PROMEDIO
 SELECT AVG(amount) AS Promedio FROM payment;
 
 -- Cual cliente gasto mas en promedio?
 SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;
 SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) ASC;
 