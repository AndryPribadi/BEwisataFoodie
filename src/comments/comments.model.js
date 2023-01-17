import { DataTypes } from "sequelize";
import { newSeq } from "../configs/database.js";

const Comments = newSeq.define(
  "comments",
  {
    comments: {
      type: DataTypes.STRING,
    },
    rating: {
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
    console.log("Comments table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default Comments;
