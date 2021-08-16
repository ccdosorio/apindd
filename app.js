const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

// Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Routes
require("./src/routes/Customer")(app);
require("./src/routes/Prospects")(app);
require("./src/routes/Contact")(app);
require("./src/routes/Auth")(app);
require("./src/routes/Executive")(app);
require("./src/routes/CustomerCalendar")(app);
require("./src/routes/Activity_type")(app);
require("./src/routes/Activity_result")(app);
require("./src/routes/Activity")(app);
require("./src/routes/Filters")(app);
require("./src/routes/Order")(app);
require("./src/routes/Pauta")(app);
require("./src/routes/Agency")(app);
require("./src/routes/CustomerRelationship")(app);
require("./src/routes/CategoryBrand")(app);
require("./src/routes/Email")(app);

app.listen(app.get("port"), () => {
  console.log(`Server run in port ${app.get("port")}`);
});
