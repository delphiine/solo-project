const Api = require('../controllers/qouteAPI');

require('jest-fetch-mock').enableFetchMocks()

describe('QouteAPI', () => {
  it('loads a random Qoute from the Useless API', () => {
    const api = new Api();

    fetch.mockResponseOnce(JSON.stringify("Random qoute"));

    api.getRandomQoute((returnDataFromApi) => {
      expect(returnDataFromApi).toBe("Random qoute");
    });
  });

  it('loads a daily Qoute from the Useless API', () => {
    const api = new Api();

    fetch.mockResponseOnce(JSON.stringify("Daily qoute"));

    api.getDailyQoute((returnDataFromApi) => {
      expect(returnDataFromApi).toBe("Daily qoute");
    });
  });
});