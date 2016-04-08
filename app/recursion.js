exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    const allFiles = []

    function getFiles(dir) {

      for (let i = 0; i < dir.files.length; i++) {

        const file = dir.files[i]

        if (typeof file === 'string') {
          allFiles.push(file)
        } else {
          getFiles(file)
        }

      }

    }

    getFiles(data)

    return allFiles

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
