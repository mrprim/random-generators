
import generators from '../generators'
import sample from './sample'

export default (names, options = {}) => {
  const name = getName(names)
  const generator = generators[name]

  let result = generator(options)
  if (options.format) {
    if (typeof result === 'object') {
      result.value = format(options.format, result.value, result)
    } else {
      result = format(options.format, result)
    }
  }

  return buildResult(name, options, result)
}

const format = (formatters, value, data) => {
  if (typeof formatters === 'function') {
    formatters = [formatters]
  }

  return formatters.reduce((val, f) => f(val), value)
}

const getName = name => {
  if (Array.isArray(name)) {
    return sample(name.map(getName))
  } else if (typeof name === 'object') {
    return sample(Object.values(name).map(getName))
  } else {
    return name.toUpperCase()
  }
}

const buildResult = (generatorName, options, result) => {
  if (typeof result !== 'object') {
    result = { value: result }
  }

  if (!options.details) return result.value

  return {
    generatorName,
    options,
    ...result
  }
}
