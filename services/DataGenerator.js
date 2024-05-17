const crypto = require("crypto");
const PositionModel = require("../models/position.js");
const UserModel = require("../models/user.js");
const CharacterFetcher = require("./CharacterFetcher.js");

class DataGenerator {
  async generateDatabaseData() {
    await this.generatePositions();
    await this.generateUsers();
  }

  async generatePositions() {
    console.log("---- Generating Positions ----");
    const positions = [
      "Lawyer", "UI/UX Designer",
      "Software Engineer (Golang)", "Writer",
      "Teacher", "Content Manager",
      "Security", "Financial Analyst",
      "Paramedic", "Architect"
    ];

    positions.forEach(async(positionName) => {
      await PositionModel.create({name: positionName});
    });
  }

  async generateUsers() {
    console.log("---- Generating Users ----");
    for (let i = 1; i < 46; i++) {
      const character = await CharacterFetcher.fetchCharater(i);

      const splittedName = character.name.toLowerCase().split(" ");
      const email = splittedName[0] + splittedName[1][0] + "@mail.com";
      let phone = "+380";
      for (let j = 1; j < 10; j++) {
        const randomNumber = crypto.randomInt(1, 10);
        phone += randomNumber;
      }
      const randomPositionId = crypto.randomInt(1, 11);

      await UserModel.create({
        name: character.name,
        email, phone,
        position_id: randomPositionId,
        photo: `${character.name.replace(" ", "")}ProfilePic.jpg`
      });
    }
  }
}

module.exports = new DataGenerator();
