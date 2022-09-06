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