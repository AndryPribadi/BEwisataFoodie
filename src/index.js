import "./configs/env.js";
import express from "express";
import userRoute from "./users/users.routes.js";
import authRoute from "./auth/auth.routes.js";
import restaurantRoute from "./restaurants/restaurants.routes.js";
import bookingRoute from "./bookings/bookings.routes.js";
import commentRoute from "./comments/comments.routes.js";
import facilitieRoute from "./facilities/facilities.routes.js";
import favouritRoute from "./favourites/favourites.routes.js";
import resto_imageRoute from "./resto_images/resto_images.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", userRoute);
app.use("/api/v1", authRoute);
app.use("/api/v1", restaurantRoute);
app.use("/api/v1", bookingRoute);
app.use("/api/v1", commentRoute);
app.use("/api/v1", facilitieRoute);
app.use("/api/v1", resto_imageRoute);
app.use("/api/v1", favouritRoute);

// start server
app.listen(process.env.API_PORT, () => {
  console.log(`Express API is listening on port ${process.env.API_PORT}`);
});
