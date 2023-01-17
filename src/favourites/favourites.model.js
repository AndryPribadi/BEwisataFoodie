import { DataTypes } from "sequelize";
import { newSeq } from "../configs/database.js";

const Favourites = newSeq.define(
  "favourites",
  {},
  {
    paranoid: true, //soft-delete
  }
);

newSeq
  .sync()
  .then(() => {
    console.log("Favourites table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default Favourites;
