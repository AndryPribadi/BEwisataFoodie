import { DataTypes } from "sequelize";
import { newSeq } from "../configs/database.js";

const Restaurants = newSeq.define(
  "restaurants",
  {
    resto_name: {
      type: DataTypes.STRING,
      unique: true,
    },
    location: {
      type: DataTypes.STRING,
    },
    menu_image_url: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    table_qouta: {
      type: DataTypes.INTEGER(20),
    },
    booking_fee: {
      type: DataTypes.INTEGER(20),
    },
    latitude: {
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    file_image_url: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING,
    },
    resto_image_url: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // 'users' refers to table name
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
    console.log("Restaurants table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export const createRestaurant = async (
  rm,
  lc,
  mi,
  cg,
  tq,
  bf,
  lt,
  lg,
  st,
  fi,
  rt,
  ri
) => {
  const create = await Restaurants.create({
    resto_name: rm,
    location: lc,
    menu_image_url: mi,
    category: cg,
    table_qouta: tq,
    booking_fee: bf,
    latitude: lt,
    longitude: lg,
    status: st,
    file_image_url: fi,
    rating: rt,
    resto_image_url: ri,
  });
  console.log(rm, "'s id : ", create.id);
  return create.id;
};

export const getRestaurantbyId = async (id) => {
  const allRestaurant = await Restaurants.findOne({
    where: {
      id: id,
    },
  });
  return allRestaurant;
};

export const getRestaurantbyName = async (rm) => {
  const allRestaurant = await Restaurants.findOne({
    where: {
      resto_name: rm,
    },
  });
  return allRestaurant;
};

export const deleteRestaurant = (id) => {
  Restaurants.destroy({
    where: {
      id: id,
    },
  });
};

export const updateRestaurant = async (data, id) => {
  await Restaurants.update(data, {
    where: {
      id: id,
    },
  });
};

export default Restaurants;
