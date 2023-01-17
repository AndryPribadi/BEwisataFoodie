import { DataTypes } from "sequelize";
import { newSeq } from "../configs/database.js";

const Bookings = newSeq.define(
  "bookings",
  {
    transection_id: {
      type: DataTypes.STRING,
    },
    order_id: {
      type: DataTypes.STRING,
    },
    table_qouta: {
      type: DataTypes.INTEGER(20),
    },
    booking_fee: {
      type: DataTypes.INTEGER(20),
    },
    paymenents_status: {
      type: DataTypes.STRING,
    },
    booking_status: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    time: {
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
    console.log("Bookings table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default Bookings;
