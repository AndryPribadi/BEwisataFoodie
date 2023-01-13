import { createUser, getUserbyId } from "./users.model.js";

export const userCreateRest = async (req, res) => {
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
  const respModel = await createUser(name, email, password, phone);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success add user",
    },
    data: {
      id: respModel,
    },
  });
};

export const userGetByIDRest = async (req, res) => {
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

  const respModel = await getUserbyId(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success get user",
    },
    data: respModel,
  });
};
