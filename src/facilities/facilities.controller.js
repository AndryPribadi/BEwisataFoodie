import {
  createFacilitie,
  deleteFacilitie,
  getFacilitiebyId,
  updateFacilitie,
} from "./facilities.model.js";

export const facilitieCreateRest = async (req, res) => {
  const { facility } = req.body;

  if (!facility) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: "Some input are required",
      },
      data: {},
    });
  }
  const respModel = await createFacilitie(facility);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success add facilitie",
    },
    data: {
      id: respModel,
    },
  });
};

export const facilitieGetByIDRest = async (req, res) => {
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

  const respModel = await getFacilitiebyId(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success get facilitie",
    },
    data: respModel,
  });
};

export const facilitieUpdateRest = async (req, res) => {
  const { id } = req.query;
  const { facility } = req.body;

  if (!(id && facility)) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: "Some input are required",
      },
      data: {},
    });
  }

  const respModel = await updateFacilitie({ facility }, id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success update facilitie",
    },
    data: {
      id: respModel,
    },
  });
};

export const facilitieDeleteRest = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({
      meta: {
        code: 400,
        error: "facility doesn't exist",
      },
    });
  }
  const respModel = await deleteFacilitie(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success delete facilitie",
    },
    data: respModel,
  });
};
