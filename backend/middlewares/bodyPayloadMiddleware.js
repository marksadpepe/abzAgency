module.exports = function(req, res, next) {
  const fails = {
    name: ["The name must be at least 2 characters and up to 60 characters"],
    email: ["The email must be a valid email address"],
    phone: ["The phone field is required"],
    position_id: ["The position ID must be an integer"],
  };

  if (!req.body) {
    return res.status(422).json({
      success: false,
      message: "Validation failed",
      fails
    });
  }

  const {name, email, phone, position_id} = req.body;

  if (!name || name.length < 2 || name.length > 60) {
    return res.status(422).json({
      success: false,
      message: "Validation failed",
      fails: {name: fails.name}
    });
  }

  if (!email || !email.match(/^[a-zA-Z0-9+--_\.]+@[a-zA-Z]+\.(com|net|org|edu|gov)$/)) {
    return res.status(422).json({
      success: false,
      message: "Validation failed",
      fails: {email: fails.email}
    });
  }

  if (!phone) {
    return res.status(422).json({
      success: false,
      message: "Validation failed",
      fails: {phone: fails.phone}
    });
  }

  if (phone.length != 13 || phone.slice(0, 4) != "+380") {
    return res.status(422).json({
      success: false,
      message: "Validation failed",
      fails: {
        phone: ["The phone number should be 13 characters long and should start wich code of Ukraine +380"]
      }
    });
  }

  if (!position_id || !Number(position_id)) {
    return res.status(422).json({
      success: false,
      message: "Validation failed",
      fails: {position_id: fails.position_id}
    });
  }

  next();
}
