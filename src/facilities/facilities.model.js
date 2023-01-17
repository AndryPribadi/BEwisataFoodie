import { DataTypes } from "sequelize";
import { newSeq } from "../configs/database.js";

const Facilities = newSeq.define(
  "facilities",
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
    console.log("Facilities table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default Facilities;
