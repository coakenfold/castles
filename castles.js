/* eslint-disable no-console, no-sparse-arrays */
function castles(landscape = [, 6, 1, , 1, , 1, 4]) {
  function getCount() {
    const initialValue = landscape[0] === undefined ? 0 : 1
    const filteredLandscape = landscape.filter(landscapeFilter)
    const twiceFilteredLandscape = filteredLandscape.filter(landscapeFilter)
    return twiceFilteredLandscape.reduce(reducer, initialValue)
  }
  function isPeak(previous, current, next) {
    if (previous < current && current > next) {
      return true
    }
    return false
  }
  function isValley(previous, current, next) {
    if (previous > current && current < next) {
      return true
    }
    return false
  }

  function reducer(accumulator, currentValue, currentIndex, array) {
    const previousValue = array[currentIndex - 1]
    const nextValue = array[currentIndex + 1]

    if (previousValue !== undefined && nextValue !== undefined) {
      if (isPeak(previousValue, currentValue, nextValue)) {
        accumulator += 1
      }
      if (isValley(previousValue, currentValue, nextValue)) {
        accumulator += 1
      }
    }
    return accumulator
  }

  function landscapeFilter(element, index, array) {
    if (index === 0) {
      return true
    }
    if (index !== 0 && element !== array[index - 1]) {
      return true
    }
  }

  return {
    getCount,
    isPeak,
    isValley,
    reducer,
    landscapeFilter,
  }
}
module.exports = castles

//console.log('count', castles().count)
