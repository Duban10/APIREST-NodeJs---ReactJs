import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // para leer .env

// Crear la instancia de Sequelize
// console.log('process.env ', process.env.DATABASE_URL)
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mssql', // muy importante: porque usas SQL Server
  dialectOptions: {
    options: {
      encrypt: true,              // Para conexiones seguras (nube o local)
      trustServerCertificate: true
    }
  }
});

// Exportamos la instancia
export default sequelize;
