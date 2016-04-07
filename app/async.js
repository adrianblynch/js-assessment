exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise((resolve, reject) => {
      resolve(value)
    })
  },

  manipulateRemoteData : function(url) {
    return fetch(url)
      .then(res => res.json())
      .then(data =>
        data.people
          .map(person => person.name)
          .sort()
      )
      .catch(err => console.log(err))
  }
};
