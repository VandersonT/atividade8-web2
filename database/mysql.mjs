import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mysql://root@localhost:3306/livrodb")

export default sequelize;