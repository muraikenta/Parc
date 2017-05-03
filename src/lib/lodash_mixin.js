import _ from 'lodash'

const mapCaseKeysCreator = (keyMapper) => {
  const mapCaseKeys = (obj) => {
    const newObj = _.mapKeys(_.mapValues(obj, (value) => {
      return _.isObjectLike(value) ? mapCaseKeys(value) : value
    }), (value, key) => {
      return keyMapper(key)
    })

    return _.isArray(obj) ? _.toArray(newObj) : newObj
  }
  return mapCaseKeys
}

_.mixin({
  camelcaseKeys: mapCaseKeysCreator(_.camelCase),
  snakecaseKeys: mapCaseKeysCreator(_.snakeCase),
  kebabCaseKeys: mapCaseKeysCreator(_.kebabCase),
})
