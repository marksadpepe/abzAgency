module.exports = class PositionDto {
  id;
  name;

  constructor(model) {
    this.id = model.dataValues.id;
    this.name = model.dataValues.name;
  }
}
