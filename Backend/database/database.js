const mongoose = require("mongoose");

const urlDatabase =
  "mongodb+srv://sonnnfx21638:sonbn2k123@cluster0.r3bhl4q.mongodb.net/";
const connect = async () => {
  try {
    let connection = await mongoose.connect(urlDatabase);
    return connection;
  } catch (err) {
    const { code } = err;
    if (code === 8000) {
      throw new Exception("sai tên đăng nhập hoặc mật khẩu !!!");
    } else if (code === "ENOTFOUIND") {
      throw new Exception("sai tên sever name !!!");
    }
    throw new Exception("lỗi gì đó rồi !!!");
  }
};

module.exports = connect;
