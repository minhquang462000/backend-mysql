const userService = require("../services/user.service");

const getAll = async (req, res) => {
  try {
    const listUser = await userService.getAllUser();
    res.status(200).json({ message: "lấy thành công", data: listUser });
  } catch (error) {
    res.status(500).json({ message: "có lỗi", error: error });
  }
};
const getOne = async (req,res) => {
  const { id } = req.params;
try {
  const userByID = await userService.getOneUser(id);
  if (userByID.length === 0) {
    return res.status(404).json({message: "không tìm thấy người dùng"})
    
  }
  res.status(200).json({message: "lấy thành công", data: userByID})
} catch (error) {
  res.status(500).json({message: "có lỗi", error: error})
}
 
};
const CreateUser = async (req, res) => {
  const { user_name, email, pass_word } = req.body;
  const newUser ={
    user_name,
    email,
    pass_word
  }
  try {
    await userService.createUser(newUser);
    res.status(200).json({ message: "Thêm mới thành công", data: newUser });
  } catch (error) {
    res.status(500).json({ message: "có lỗi", error: error });
  }
  // không đưa ra các cột mặc định phải truyền 100% các cột theo đúng thứ tự  trong bảng
  //  
  // c2: thêm mới với các trường dữ liệu cột trong bảng
  // connection.query(
  //   "INSERT INTO users (user_name,email,pass_word) VALUES(?,?,?)",
  //   [user_name, email, pass_word],
  //   (err, result) => {
  //     if (err) {
  //       throw new Error(err);
  //       return;
  //     }
  //     res.status(200).json({
  //       message: "Create user successfully",
  //     });
  //   }
  // );
};
const UpdateUser = async (req, res) => {
  const { id } = req.params;
  const { user_name, email, pass_word } = req.body;
  const newUserUpdate = {
    user_name,
    email,
    pass_word
  }

  try {
    const updateUser = await userService.updateUser(newUserUpdate, id);
    res.status(200).json({ message: "Update user successfully", data: updateUser });
  
  } catch (error) {
    res.status(500).json({ message: "có lỗi", error: error });
  }
}
const RemoveUsre = async (req, res) => {
  const { id } = req.params;
 try {
  await userService.deletrUser(id);
  res.status(200).json({message: "Xoá thành công"})
 } catch (error) {
  res.status(500).json({message: " lỗi server", error: error})
 }
};
module.exports = {
  getAll,
  getOne,
  CreateUser,
  UpdateUser,
  RemoveUsre,
};
