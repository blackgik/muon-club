const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    { autoIndex: false }
  )
  .then(() => {
    console.log("database has connected correctly");
  })
  .catch((e) => {
    console.log("Access to database failed", e);
  });
