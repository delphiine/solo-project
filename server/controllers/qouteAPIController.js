class QouteAPI {
  constructor() {
    this.URL = 'https://zenquotes.io/api/';
  }

  getRandomQoute () {
    fetch(this.URL  + 'random', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json[0].h);
    });
  }

  getDailyQoute () {
    fetch(this.URL  + 'today', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json[0].h);
    });
  }
}

module.exports = QouteAPI;
