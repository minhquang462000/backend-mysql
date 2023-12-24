const express = require("express");
const app = express();
const cors =require("cors")
const path = require("path");
const bodyParser = require("body-parser");
const rootRouter = require("./routers/index.router")
// Middleware

app.use(bodyParser.json());
// chia sẻ tài nguyên giữa react và express

app.use(cors());
// Routes
//

// Middlewere

// Router
rootRouter(app);

// Run server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
