module.exports = class UserDto {
  id;
  name;
  email;
  phone;
  position;
  position_id;
  photo;

  constructor(model) {
    this.id = model.dataValues.id;
    this.name = model.dataValues.name;
    this.email = model.dataValues.email;
    this.phone = model.dataValues.phone;
    this.position = model.dataValues.position;
    this.position_id = model.dataValues.position_id;
    this.photo = model.dataValues.photo;
  }
}
