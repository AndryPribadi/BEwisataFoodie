import { DataTypes } from "sequelize";
import { newSeq } from "../configs/database.js";

const Facilities = newSeq.define(
  "facilities",
  {
    facility: {
      type: DataTypes.STRING,
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
    console.log("Facilities table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export const createFacilitie = async (fy) => {
  const create = await Facilities.create({
    facility: fy,
  });
  console.log(fy, "'s id : ", create.id);
  return create.id;
};

export const getFacilitiebyId = async (id) => {
  const allFacilitie = await Facilities.findOne({
    where: {
      id: id,
    },
  });
  return allFacilitie;
};

export const getFacilitiebyName = async (fy) => {
  const allFacilitie = await Facilities.findOne({
    where: {
      facility: fy,
    },
  });
  return allFacilitie;
};

export const deleteFacilitie = (id) => {
  const allFacilitie = Facilities.destroy({
    where: {
      id: id,
    },
  });
  return allFacilitie;
};

export const updateFacilitie = async (data, id) => {
  const allFacilitie = await Facilities.update(data, {
    where: {
      id: id,
    },
  });
  return allFacilitie;
};

export default Facilities;
