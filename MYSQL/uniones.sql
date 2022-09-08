use tienda;
INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '555555234', 'Comala'),
('Raul', 'Sanchez', '555555234', 'Hidalgo'),
('Victor', 'Fernández', '555555234', 'Comala'),
('Magali', 'Quiroz', '555555234', 'CDMX'),
('María', 'Vargas', '555555234', 'CDMX'),
('Marina', 'Pardo', '555555234', 'CDMX');

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
values (7, '2022-09-08', 952.50, 7),
 (4, '2022-09-06', 500.50, 5);


-- inner join Explicita
SELECT *
FROM clientes  -- tabla base
INNER JOIN compra       -- Tabla a unir
ON  clientes.cliente_id = compra.cliente_id;

SELECT 
clientes.cliente_id AS 'Numero de cliente',
clientes.nombre AS Nombre,
compra.fecha_compra
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id; 
 
 
 -- Union Implicita
 SELECT * 
 FROM clientes, compra
 WHERE clientes.cliente_id =compra.cliente_id;
 
 -- left join
 SELECT * 
 FROM clientes
 LEFT JOIN compra
 ON clientes.cliente_id = compra.cliente_id;
 
 -- right join
 SELECT * 
 FROM clientes
 RIGHT JOIN compra
 ON clientes.cliente_id = compra.cliente_id;
 
 /*
address - city_id / address

city    - city_id / city / country_id 

country  - country_id / country
*/
use sakila;
SELECT
address.address,
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;


SELECT
country.country AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON city.country_id = country.country_id
INNER JOIN address ON address.city_id = city.city_id;

 
 
 


