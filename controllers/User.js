const UserService = require("../services/User.js");

class UserController {
  async registerUser(req, res) {
    try {
      const {name, email, phone, positionId} = req.body;
      const user = await UserService.createUser(name, email, phone, positionId, req.file.path);

      return res.status(201).json({
        success: true,
        user_id: user.id,
        message: "New user successfully registered"
      });
    } catch (err) {
      const [statusCode, errMsg] = err.message.split(":");
      return res.status(Number(statusCode)).json({
        success: false,
        message: errMsg
      });
    }
  }

  async getUser(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      return res.status(200).json({
        success: true,
        user: {
          id: user.id, name: user.name, email: user.email,
          phone: user.phone, position: user.position, position_id: user.position_id,
          photo: user.photo
        }
      });
    } catch (err) {
      const [statusCode, errMsg] = err.message.split(":");
      return res.status(Number(statusCode)).json({
        success: false,
        message: errMsg
      });
    }
  }
}

module.exports = new UserController();
