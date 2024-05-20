const UserService = require("../services/User.js");

class UserController {
  async registerUser(req, res) {
    try {
      const {name, email, phone, position_id} = req.body;
      const user = await UserService.createUser(name, email, phone, position_id, req.file.path);

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

  async getUsers(req, res) {
    try {
      const result = await UserService.getPaginatedUsers(req.query.page, req.query.count);
      const users = [];
      result.users.forEach(user => {
        users.push({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          position: user.position,
          position_id: user.positionId,
          registration_timestamp: user.createdAt,
          photo: user.photo
        });
      });

      return res.status(200).json({
        success: true,
        page: req.query.page,
        total_pages: result.totalPages,
        total_users: result.totalUsers,
        count: req.query.count,
        links: {
          next_url: result.nextLink,
          prev_url: result.prevLink
        },
        users
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
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          position: user.position,
          position_id: user.positionId,
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
