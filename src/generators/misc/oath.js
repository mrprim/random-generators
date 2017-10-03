const sample = require('../../utils/sample')
const barbarian = require('../names/barbarian')
const bodypart = require('../things/bodypart')
const weapon = require('../things/weapon')
const toTitleCase = require('../../utils/toTitleCase')

const thing = function thing () {
  return sample([bodypart, weapon])()
}

module.exports = function oath () {
  const oaths = [
    'By the ' + toTitleCase(thing()) + ' of ' + toTitleCase(barbarian()) + '!',
    'By ' + toTitleCase(barbarian()) + '!',
    toTitleCase(barbarian()) + '\'s ' + toTitleCase(thing()) + '!'
  ]

  return sample(oaths)
}
