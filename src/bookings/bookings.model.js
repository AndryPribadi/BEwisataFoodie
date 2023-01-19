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
    payments_status: {
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // 'users' refers to table name
        key: "id", // 'id' refers to column name in users table
      },
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "restaurants", // 'users' refers to table name
        key: "id", // 'id' refers to column name in users table
      },
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

export const createBooking = async (ti, oi, mi, tq, bf, ps, bs, dt, tm) => {
  const create = await Bookings.create({
    transection_id: ti,
    order_id: oi,
    menu_image_url: mi,
    table_qouta: tq,
    booking_fee: bf,
    payments_status: ps,
    booking_status: bs,
    date: dt,
    time: tm,
  });
  console.log(ti, "'s id : ", create.id);
  return create.id;
};

export const getBookingbyId = async (id) => {
  const allBooking = await Bookings.findOne({
    where: {
      transection_id: id,
    },
  });
  return allBooking;
};

export const getBookingbyName = async (ti) => {
  const allBooking = await Bookings.findOne({
    where: {
      transection_id: ti,
    },
  });
  return allBooking;
};

export const deleteBooking = (id) => {
  Bookings.destroy({
    where: {
      id: id,
    },
  });
};

export const updateBooking = async (data, id) => {
  await Bookings.update(data, {
    where: {
      id: id,
    },
  });
};

export default Bookings;
