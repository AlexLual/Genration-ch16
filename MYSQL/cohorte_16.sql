create database generacion;
use generacion;
create table cohorte_16 (
alumno_id INT NOT NULL auto_increment PRIMARY KEY,
nombre char(50)  NOT NULL,
apellido char(50) NOT NULL,
compañeros INT NOT NULL,
direccion varchar(150) NOT NULL,
proyecto varchar(150) NOT NULL);



SELECT * FROM cohorte_16;


INSERT INTO cohorte_16 (nombre, apellido, compañeros, direccion, proyecto)
value ("Pepe", "Hernandez", 5, "pastora","Epimerch" ),
 ("Daniel", "Rosas", 5, "La paz","Epimerch" ),
 ("Karen", "Benitez", 5, "tangamandapio","tecnogurus"),
 ("Andres", "Gutierrez", 5, "condesa","Epimerch" ),
 ("Fabiola", "dinosauria", 5, "planco","Epimerch" ),
 ("Camilo", "dino", 5, "Tlalnepantla","Epimerch" ),
 ("Brenda", "dino_rex", 5, "jamaica","Epimerch") ,
 ("Thady", "Diaz", 5, "basilica","Epimerch" );
 
 SELECT * FROM cohorte_16;
 delete from cohorte_16
 where alumno_id =3;
 
 SELECT * FROM cohorte_16;
 
UPDATE cohorte_16
SET nombre = "Marina";

SELECT * FROM cohorte_16;