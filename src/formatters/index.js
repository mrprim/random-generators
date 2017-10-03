const ssml = require('./ssml')

module.exports = (formatString) => {
  if (typeof formatString === 'string') {
    formatString = formatString && formatString.toLowerCase()
  }
  switch (formatString) {
    case 'ssml':
      return ssml
    default:
      return {
        em: x => x,
        strong: x => x,
        small: x => x,
        t: x => x,
        p: x => x
      }
  }
}