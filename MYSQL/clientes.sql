create database TIENDA;
USE TIENDA;
CREATE table clientes( 
cliente_id INT NOT NULL auto_increment PRIMARY KEY,
 nombre char(50)NOT NULL,
 apellido char(50)NOT NULL,
 telefono char(50) NOT NULL,
 direccion varchar(150) NOT NULL
 );
 


INSERT INTO clientes(nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Paramo', '55555555234', 'Comala'),
 ('Raul', 'Sanchez', '55555555234', 'Comala'),
 ('Victor', 'Fernández', '55555555234', 'Comala');



SELECT * FROM clientes;
DELETE FROM clientes
WHERE cliente_id =3;

DELETE FROM clientes
WHERE cliente_id =2;
SELECT * FROM clientes;

drop table clientes;