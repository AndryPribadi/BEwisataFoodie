import { DataTypes } from "sequelize";
import { newSeq } from "../configs/database.js";

const Resto_images = newSeq.define(
  "resto_images",
  {
    facility: {
      type: DataTypes.STRING,
    },
  },
  {
    paranoid: true, //soft-delete
  }
);

newSeq
  .sync()
  .then(() => {
    console.log("Resto_images table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default Resto_images;
