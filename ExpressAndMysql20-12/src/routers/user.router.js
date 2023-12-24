const {
  getAll,
  getOne,
  CreateUser,
  UpdateUser,
  RemoveUsre,
} = require("../controllers/user.controller");
const endpoint = "/api/v1/users";
const userRouter = (app) => {
  //Get all Users
  app.get(endpoint,getAll);
  // Lấy 1 cái
  app.get(`${endpoint}/:id`,getOne );
  // Thêm mới
  app.post(`${endpoint}`,CreateUser );
  // Sửa theo ID hoặc Email
  app.patch(`${endpoint}/:id`,UpdateUser );
  // Xoá 1 với ID hoặc Email
  app.delete(`${endpoint}/:id`,RemoveUsre );
};
module.exports = userRouter;
