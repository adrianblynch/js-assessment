exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item)
  },

  sum : function(arr) {
    return arr.reduce((a, b) => a + b)
  },

  remove : function(arr, item) {
    return arr.filter(i => i !== item)
  },

  removeWithoutCopy : function(arr, item) {
    let i = arr.length
    while (i > 0) {
      if (arr[i] === item) {
        arr.splice(i, 1)
      }
      i--
    }
    return arr
  },

  append : function(arr, item) {
    return [...arr, item]
  },

  truncate : function(arr) {
    return arr.slice(0, -1)
  },

  prepend : function(arr, item) {
    return [item, ...arr]
  },

  curtail : function(arr) {
    return arr.slice(1)
  },

  concat : function(arr1, arr2) {
    return [...arr1, ...arr2]
  },

  insert : function(arr, item, index) {
    return [
      ...arr.slice(0, index),
      item,
      ...arr.slice(index)
    ]
  },

  count : function(arr, item) {
    return arr.reduce((count, i) => {
      i === item ? count++ : count
      return count
    }, 0)
  },

  duplicates : function(arr) {

    // Why Map? To maintain the type of each item which is lost if I reduce to an object:
    // Object.keys({1: 2, 3: 4}) // ['1', '3'] and not [1, 3]

    const counts = arr
      .reduce((counts, i) => {
        counts.has(i) ? counts.set(i, counts.get(i) + 1) : counts.set(i, 1) // Ick!
        return counts
      }, new Map())

    return [...counts]
      .filter(count => count[1] > 1)
      .map(count => count[0])

  },

  square : function(arr) {
    return arr.map(item => item * item)
  },

  findAllOccurrences : function(arr, target) {
    return arr.reduce((indexes, item, currentIndex) => {
      item === target ? indexes.push(currentIndex) : null
      return indexes
    }, [])
  }
};
