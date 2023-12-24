const userRouter = require("./user.router");
const rootRouter = (app) => {
  userRouter(app);
};
module.exports = rootRouter;
