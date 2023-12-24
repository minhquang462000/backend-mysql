
const connection = require("../configs/config.mysql");

const userService = {
  getAllUser: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT *FROM users", (err, result) => {
        if (err) {
          console.log(err);
           reject(err);
        }
         resolve(result);
      });
    });
  },
  getOneUser:(id)=>{
    return new Promise ((resolve,reject)=>{
       
         connection.query(
    "SELECT * FROM users WHERE user_id = ?",
    id,
    (err, result) => {
      if (err) {
       reject(err);
      }
     resolve(result);
    }
  );
    })
  },
  createUser:(newUser)=>{
    return new Promise ((resolve,reject)=>{
     connection.query(
      "INSERT INTO users SET ?",
      newUser,
      (err, result) => {
        if (err) {
        reject(err)
        }
       resolve(result);
      }
    );
  })
},updateUser:(newUserUpdate, id)=>{
  return new Promise ((resolve,reject)=>{
    connection.query(
        "UPDATE users SET ? WHERE user_id =?",
        [newUserUpdate, id],
        (err, result) => {
          if (err) {
           reject(err)
          }
        resolve(result)
        }
      );
})},deletrUser:(id)=>{
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM users WHERE user_id = ?",id, (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(result);
      });
    });
}
};

module.exports = userService;
