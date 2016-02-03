const startLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const otherLetters = '0123456789---___'.split('');
const allLetters   = startLetters.concat(otherLetters);

module.exports = length => {
  let str = '';
  for (let i = length; i > 0; --i) {
    str += str.length ?
      allLetters[Math.floor(Math.random() * allLetters.length)]:
      startLetters[Math.floor(Math.random() * startLetters.length)];
  }
  return str;
};
