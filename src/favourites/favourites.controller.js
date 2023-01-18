import {
  createFavourit,
  deleteFavourit,
  getFavouritbyId,
  updateFavourit,
} from "./favourites.model.js";

export const favouritCreateRest = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: "Some input are required",
      },
      data: {},
    });
  }
  const respModel = await createFavourit(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success add favourit",
    },
    data: {
      id: respModel,
    },
  });
};

export const favouritGetByIDRest = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: "Some input are required",
      },
      data: {},
    });
  }

  const respModel = await getFavouritbyId(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success get favourit",
    },
    data: respModel,
  });
};

export const favouritUpdateRest = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: "Some input are required",
      },
      data: {},
    });
  }

  const respModel = await updateFavourit(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success update Favourit",
    },
    data: {
      id: respModel,
    },
  });
};

export const favouritDeleteRest = async (req, res) => {
  const { id } = req.query;
  const respModel = await deleteFavourit(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success delete favourit",
    },
    data: respModel,
  });
};
