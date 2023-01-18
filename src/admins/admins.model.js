import { DataTypes } from "sequelize";
import { newSeq } from "../configs/database.js";

const Admins = newSeq.define(
  "admins",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar_url: {
      type: DataTypes.TEXT,
    },
    phone: {
      type: DataTypes.STRING(20),
    },
  },
  {
    paranoid: true, //soft-delete
  }
);

newSeq
  .sync()
  .then(() => {
    console.log("Admins table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export const createAdmin = async (nm, em, pw, ph) => {
  const create = await Admins.create({
    name: nm,
    email: em,
    password: pw,
    phone: ph,
  });
  console.log(nm, "'s id : ", create.id);
  return create.id;
};

export const getAdminbyId = async (id) => {
  const allAdmin = await Admins.findOne({
    where: {
      id: id,
    },
  });
  return allAdmin;
};

export const getAdminbyName = async (nm) => {
  const allAdmin = await Admins.findOne({
    where: {
      name: nm,
    },
  });
  return allAdmin;
};

export const deleteAdmin = (id) => {
  Admins.destroy({
    where: {
      id: id,
    },
  });
};

export const updateAdmin = async (data, id) => {
  await Admins.update(data, {
    where: {
      id: id,
    },
  });
};

export default Admins;
