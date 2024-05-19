module.exports = class UserDto {
  id;
  name;
  email;
  phone;
  position;
  positionId;
  photo;

  constructor(model) {
    this.id = model.dataValues.id;
    this.name = model.dataValues.name;
    this.email = model.dataValues.email;
    this.phone = model.dataValues.phone;
    this.position = model.dataValues.position;
    this.positionId = model.dataValues.positionId;
    this.photo = model.dataValues.photo;
  }
}
