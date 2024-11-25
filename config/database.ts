import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,        // Database name
  process.env.DB_USER as string,        // Username
  process.env.DB_PASSWORD as string,    // Password
  {
    host: process.env.DB_HOST,          // Host
    port: Number(process.env.DB_PORT),  // Port
    dialect: 'postgres',                // Dialect
    logging: false,                     // Disable SQL query logging
  }
);

export default sequelize;
