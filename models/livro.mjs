import sequelize from "../database/mysql.mjs";
import { DataTypes } from "sequelize";

const Livro = sequelize.define('Livros', {
    titulo: DataTypes.STRING,
    ano_publicacao: DataTypes.INTEGER,
    categoria: DataTypes.STRING,
    altor: DataTypes.STRING,
});

async function syncLivro() {
    await Livro.sync();
}

syncLivro();

export default Livro;
