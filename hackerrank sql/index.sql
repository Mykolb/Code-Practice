-- Revising the Select Query I - 1
SELECT *  FROM CITY
WHERE  COUNTRYCODE = 'USA' and POPULATION > 100000

-- Revising the Select Query II
SELECT NAME FROM CITY
WHERE COUNTRYCODE = 'USA' AND POPULATION > 120000

-- Select All - 3
Select * from CITY

-- Select By ID
Select * FROM CITY
Where ID = '1661'

-- Japanese Cities' Attributes
SELECT * FROM CITY
WHERE COUNTRYCODE = 'JPN'

-- Japanese Cities' Names
SELECT NAME FROM CITY
WHERE COUNTRYCODE = "JPN"

-- Weather Observation Station 1
SELECT DISTINCT CITY,STATE FROM STATION

-- Weather Observation Station 3
SELECT DISTINCT CITY FROM STATION
WHERE ID % 2 = 0 

-- Employee Names
SELECT NAME FROM EMPLOYEE
ORDER BY NAME ASC

-- Employee Salaries
SELECT name  FROM EMPLOYEE
WHERE salary > 2000 and months < 10
ORDER BY EMPLOYEE_ID ASC

-- Revising Aggregations - The Count Function
SELECT COUNT(POPULATION) FROM CITY
WHERE POPULATION > 100000

-- Revising Aggregations - The Sum Function
SELECT SUM(POPULATION) FROM CITY
WHERE DISTRICT = 'CALIFORNIA'

-- Japan Population
Select SUM(POPULATION) FROM CITY
WHERE COUNTRYCODE = 'JPN'

-- Population Density Difference
SELECT MAX(POPULATION) - MIN(POPULATION) FROM CITY

-- Population Census
SELECT SUM(CITY.POPULATION) FROM CITY
JOIN COUNTRY
ON CITY.CountryCode = COUNTRY.Code
WHERE CONTINENT = 'ASIA'

-- African Cities
Select CITY.NAME FROM CITY
JOIN COUNTRY
ON CITY.CountryCode = COUNTRY.Code
WHERE CONTINENT = "AFRICA"


-- Average Population of Each Continent
SELECT COUNTRY.CONTINENT, ROUND(AVG(CITY.POPULATION)-0.5) FROM CITY
JOIN COUNTRY
ON  CITY.CountryCode = COUNTRY.Code
GROUP BY COUNTRY.CONTINENT

-- -0.5 rounds down to to nearest integer
-- Group By combines rows into groups based on matching values in specified columns, often used with MIN, MAX, AVG, SUM, COUNT 






























