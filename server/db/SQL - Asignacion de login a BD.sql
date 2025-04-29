-- 1. Conéctate a la base de datos
USE VentasVehiculos;
GO
-- 2. Crea el usuario si no existe
CREATE USER Duban FOR LOGIN Duban;
GO
-- 3. Asigna los permisos (opcional)
ALTER ROLE db_owner ADD MEMBER Duban;
GO

USE VentasVehiculos;
GO
SELECT name AS DatabaseUserName
FROM sys.database_principals
WHERE type IN ('S', 'U') -- Filtra usuarios SQL y Windows
ORDER BY name;

----------------------- // --------------------------------

-- 1. Conéctate a la base de datos
USE admin_productos;
GO
-- 2. Crea el usuario si no existe
CREATE USER Duban FOR LOGIN Duban;
GO
-- 3. Asigna los permisos (opcional)
ALTER ROLE db_owner ADD MEMBER Duban;
GO

--- Listar los usuario y/o login de esa BD
USE admin_productos;
GO
SELECT name AS DatabaseUserName
FROM sys.database_principals
WHERE type IN ('S', 'U') -- Filtra usuarios SQL y Windows
ORDER BY name;