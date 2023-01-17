import "./configs/env.js";
import express from "express";
import userRoute from "./users/users.routes.js";
import authRoute from "./auth/auth.routes.js";
import restaurantRoute from "./restaurants/restaurants.routes.js";
import adminRoute from "./admins/admins.routes.js";
import Bookings from "./bookings/bookings.model.js";
import Comments from "./comments/comments.model.js";
import Facilities from "./facilities/facilities.model.js";
import Favourites from "./favourites/favourites.model.js";
import Resto_images from "./resto_images/resto_images.model.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", userRoute);
app.use("/api/v1", authRoute);
app.use("/api/v1", adminRoute);
app.use("/api/v1", restaurantRoute);
Bookings;
Comments;
Facilities;
Favourites;
Resto_images;

// start server
app.listen(process.env.API_PORT, () => {
  console.log(`Express API is listening on port ${process.env.API_PORT}`);
});
