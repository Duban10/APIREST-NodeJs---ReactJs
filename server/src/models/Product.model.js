// models/Producto.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // Tu archivo de conexión

const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // porque pusiste IDENTITY(1,1)
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100), // VARCHAR(100)
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10,2), // DECIMAL(10,2)
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'productos', // Muy importante si tu tabla ya existe
  timestamps: false,      // No tienes createdAt ni updatedAt en tu tabla
});

export default Producto;
