
class UselessFactAPI {
  constructor() {
    this.URL = 'https://uselessfacts.jsph.pl/';
  }

  getRandomFact () {
    fetch(this.URL  + 'random.json?language=en', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.text);
    });
  }

  getDailyFact () {
    fetch(this.URL  + 'today.json?language=en', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.text);
    });
  }
}

module.exports = UselessFactAPI;
