const https = require("https");

class CharacterFetcher {
  fetchCharater(number) {
    const url = `https://rickandmortyapi.com/api/character/${number}`;

    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk
        });

        res.on("end", () => {
          try {
            const parsedData = JSON.parse(data);
            resolve(parsedData);
          } catch (err) {
            reject(`Failed to parse ${number} character data: ${err.message}`);
          }
        });
      }).on("error", (err) => reject(`Failed to fetch ${number} character: ${err.message}`));
    });
  }
}

module.exports = new CharacterFetcher();
