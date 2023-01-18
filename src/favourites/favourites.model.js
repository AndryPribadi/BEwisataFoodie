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

export const createFavourit = async (id) => {
  const create = await Favourites.create({
    id: id,
  });
  console.log(id, "'s id : ", create.id);
  return create.id;
};

export const getFavouritbyId = async (id) => {
  const allFavourit = await Favourites.findOne({
    where: {
      id: id,
    },
  });
  return allFavourit;
};

export const getFavouritbyName = async (id) => {
  const allFavourit = await Favourites.findOne({
    where: {
      id: id,
    },
  });
  return allFavourit;
};

export const deleteFavourit = (id) => {
  Favourites.destroy({
    where: {
      id: id,
    },
  });
};

export const updateFavourit = async (data, id) => {
  await Favourites.update(data, {
    where: {
      id: id,
    },
  });
};

export default Favourites;
