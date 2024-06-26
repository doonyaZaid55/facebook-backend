import { Sequelize } from "sequelize";

export const sequelizeInstance = new Sequelize("facebook123", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const db_connection = async () => {
  try {
    await sequelizeInstance.sync({ alter: false, force: false });
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

export default db_connection;
