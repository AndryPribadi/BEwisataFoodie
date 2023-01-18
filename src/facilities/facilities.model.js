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
  Facilities.destroy({
    where: {
      id: id,
    },
  });
};

export const updateFacilitie = async (data, id) => {
  await Facilities.update(data, {
    where: {
      id: id,
    },
  });
};

export default Facilities;
