const connectToDB = require("./config/database.config.js");
const app = require("./config/app.config.js");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 5000;

connectToDB()
  .then(() =>
    app.listen(port, () => console.log(`Server is running on port: ${port}`))
  )
  .catch((err) => console.error(err));
