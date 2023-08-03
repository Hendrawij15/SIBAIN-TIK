import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js"; //Koneksi ke database

const { DataType } = Sequelize;

const Jenis = db.define(
  "jenis_barang",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
      },
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: true, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
        len: [0, 100], //panjang nama
      },
    },
    no_bmn: {
      type: DataTypes.INTEGER,
      allowNull: true, //mendefinisikan file tidak boleh kosong
      Validate: {
        notEmpty: true, // tidak boleh bernilai 0 dan kosong
        len: [0, 100], //panjang nama
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Jenis;
