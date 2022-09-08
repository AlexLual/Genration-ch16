USE worl;
SELECT * FROM country;
SELECT Name, Population FROM country ORDER BY Population DESC; 

SELECT Name, Population FROM country WHERE NAME= "Mexico"; 

SELECT * FROM country WHERE NAME= "Mexico"; 

SELECT 5+5;

SELECT NAME AS Nombre_de_pais, Population AS "Población del país" FROM country ORDER BY Nombre_de_país;
SELECT DISTINCT Continent FROM country;



-- WHERE CLAUSULA
-- <>  <= >= != =  

SELECT * FROM Country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy ASC;


SELECT * FROM Country WHERE Comtinent  !='North America' ORDER BY Continent ASC ;


-- BETWEEN 
-- SE UTILIZA JUNTO CON WHERE
SELECT * FROM Country WHERE Population BETWEEN 50000000 AND 70000000  ORDER BY Population DESC;
SELECT * FROM Country WHERE Population NOT BETWEEN 50000000 AND 70000000  ORDER BY Population DESC;

-- OR Y AND
SELECT * FROM Country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';

SELECT * FROM Country WHERE Continent != 'Asia' AND Continent != 'Europe' AND Continent != 'North America';
-- OPERADOR IN
SELECT * FROM Country WHERE Continent IN( 'AsiA','Europa','North America') ORDER BY Continent;
SELECT * FROM Country WHERE Continent NOT IN( 'AsiA','Europa','North America') ORDER BY Continent;


-- BUSCAR NULOS 
SELECT * FROM Country WHERE IndepYear IS NOT NULL;
SELECT * FROM Country WHERE IndepYear IS NULL;

-- LIKE PARA BUSCAR UN PATRON EN ESPECIFICO
-- '%' BUSCAR CUALQUIER CANTIDAD DE CARACTERES 
-- '_' ESPECIFICAMOS UN CARACTER
SELECT * FROM Country WHERE Name LIKE '%as%';
SELECT * FROM Country WHERE Name LIKE '%e__a%';