import {
  createAdmin,
  deleteAdmin,
  getAdminbyId,
  updateAdmin,
} from "./admins.model.js";

export const adminCreateRest = async (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!(name && password && email)) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: "Some input are required",
      },
      data: {},
    });
  }
  const respModel = await createAdmin(name, email, password, phone);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success add admin",
    },
    data: {
      id: respModel,
    },
  });
};

export const adminGetByIDRest = async (req, res) => {
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

  const respModel = await getAdminbyId(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success get admin",
    },
    data: respModel,
  });
};

export const adminUpdateRest = async (req, res) => {
  const { id } = req.query;
  const { name, email, password, phone } = req.body;

  if (!(id && name && password && email && phone)) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: "Some input are required",
      },
      data: {},
    });
  }

  const respModel = await updateAdmin(id, name, email, password, phone);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success update admin",
    },
    data: {
      id: respModel,
    },
  });
};

export const adminDeleteRest = async (req, res) => {
  const { id } = req.query;
  const respModel = await deleteAdmin(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success delete admin",
    },
    data: respModel,
  });
};
