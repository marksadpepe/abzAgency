const crypto = require("crypto");
const PositionService = require("./Position.js");
const UserService = require("./User.js");
const CharacterFetcher = require("./CharacterFetcher.js");

class DataGenerator {
  async generateDatabaseData() {
    await this.generatePositions();
    await this.generateUsers();
  }

  async generatePositions() {
    const positions = [
      "Lawyer", "UI/UX Designer",
      "Software Engineer (Golang)", "Writer",
      "Teacher", "Content Manager",
      "Security", "Financial Analyst",
      "Paramedic", "Architect"
    ];

    positions.forEach(async(positionName) => {
      await PositionService.createPosition(positionName);
    });
  }

  async generateUsers() {
    for (let i = 1; i < 46; i++) {
      let chName = "";
      const character = await CharacterFetcher.fetchCharater(i);
      const splittedName = character.name.toLowerCase().split(" ");
      
      if (splittedName.length > 1) {
        chName = splittedName[0] + splittedName[1][0];
      } else {
        chName = splittedName[0] + splittedName[0][0]
      }

      const email = chName + i + "@mail.com";
      let phone = "+380";
      for (let j = 1; j < 10; j++) {
        const randomNumber = crypto.randomInt(1, 10);
        phone += randomNumber;
      }
      const randomPositionId = crypto.randomInt(1, 11);

      await UserService.createUser(character.name, email, phone, randomPositionId);
    }
  }
}

module.exports = new DataGenerator();
