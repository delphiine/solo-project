const Api = require('../controllers/uselessFactAPI');

require('jest-fetch-mock').enableFetchMocks()

describe('UselessFactAPI', () => {
  it('loads a random fact from the Useless API', () => {
    const api = new Api();

    fetch.mockResponseOnce(JSON.stringify("Random fact"));

    api.getRandomFact((returnDataFromApi) => {
      expect(returnDataFromApi).toBe("Random fact");
    });
  });

  it('loads a daily fact from the Useless API', () => {
    const api = new Api();

    fetch.mockResponseOnce(JSON.stringify("Daily fact"));

    api.getDailyFact((returnDataFromApi) => {
      expect(returnDataFromApi).toBe("Daily fact");
    });
  });
});