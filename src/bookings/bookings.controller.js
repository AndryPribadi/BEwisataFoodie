import {
  createBooking,
  deleteBooking,
  getBookingbyId,
  updateBooking,
} from "./bookings.model.js";

export const bookingCreateRest = async (req, res) => {
  const { transection_id, order_id, table_qouta, booking_fee } = req.body;

  if (!(transection_id && order_id && table_qouta && booking_fee)) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: "Some input are required",
      },
      data: {},
    });
  }
  const respModel = await createBooking(
    transection_id,
    order_id,
    table_qouta,
    booking_fee
  );

  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success add booking",
    },
    data: {
      id: respModel,
    },
  });
};

export const bookingGetByIDRest = async (req, res) => {
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

  const respModel = await getBookingbyId(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success get Booking",
    },
    data: respModel,
  });
};

export const bookingUpdateRest = async (req, res) => {
  const { id } = req.query;
  const { transection_id, order_id, table_qouta, booking_fee } = req.body;

  if (!(id && transection_id && order_id && table_qouta && booking_fee)) {
    return res.status(400).json({
      meta: {
        code: 400,
        message: "Some input are required",
      },
      data: {},
    });
  }

  const respModel = await updateBooking(
    {
      transection_id,
      order_id,
      table_qouta,
      booking_fee,
    },
    id
  );
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success update booking",
    },
    data: {
      id: respModel,
    },
  });
};

export const bookingDeleteRest = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({
      meta: {
        code: 400,
        error: "comment doesn't exist",
      },
    });
  }
  const respModel = await deleteBooking(id);
  return res.status(200).json({
    meta: {
      code: 200,
      message: "Success delete booking",
    },
    data: respModel,
  });
};
