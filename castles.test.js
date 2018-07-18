const castles = require('./castles')

describe('Confirming castle counts', () => {
  it('Should be 3', () => {
    expect(castles([1, 2, 3, 0, 100]).getCount()).toBe(3)
  })
  it('Should be 2', () => {
    expect(castles([0, 1, 0]).getCount()).toBe(2)
  })
  it('Should be 2', () => {
    expect(castles([1, 0, 1]).getCount()).toBe(2)
  })
  it('Should be 1', () => {
    expect(castles([0, 0, 0]).getCount()).toBe(1)
  })

  it('Should be 1', () => {
    expect(castles([0, 1, 2]).getCount()).toBe(1)
  })
  it('Should be 1', () => {
    expect(castles([, 1, 2, 1]).getCount()).toBe(1)
  })

  it('Should be 0', () => {
    expect(castles([, 1, 2]).getCount()).toBe(0)
  })

  it('Should be 0', () => {
    expect(castles([, 1, 0]).getCount()).toBe(0)
  })
})
describe('isPeak', () => {
  it('Should be true', () => {
    expect(castles().isPeak(0, 1, 0)).toBe(true)
  })
  it('Should be false', () => {
    expect(castles().isPeak(1, 0, 1)).toBe(false)
  })
  it('Should be true', () => {
    expect(castles().isPeak(0, 0, 0)).toBe(false)
  })
})
describe('isValley', () => {
  it('Should be true', () => {
    expect(castles().isValley(1, 0, 1)).toBe(true)
  })
  it('Should be false', () => {
    expect(castles().isValley(0, 1, 0)).toBe(false)
  })
  it('Should be false', () => {
    expect(castles().isValley(0, 0, 0)).toBe(false)
  })
})

describe('reducer(accumulator, currentValue, currentIndex, array)', () => {
  it('Should be 0', () => {
    expect(castles().reducer(0, 0, 1, [0, 0, 0])).toBe(0)
  })
  it('Should be 1', () => {
    expect(castles().reducer(0, 1, 1, [0, 1, 0])).toBe(1)
  })
  it('Should be 1', () => {
    expect(castles().reducer(0, 0, 1, [1, 0, 1])).toBe(1)
  })
  it('Should return accumulator', () => {
    expect(castles().reducer(99, 0, 0, [0, 1, 2])).toBe(99)
  })
})
describe('landscapeFilter(element, index, array)', () => {
  it('Should be undefined', () => {
    expect(castles().landscapeFilter(9, 1, [9, 0])).toBe(undefined)
  })
  it('Should be true', () => {
    expect(castles().landscapeFilter(9, 1, [0, 0])).toBe(true)
  })
  it('Should be true', () => {
    expect(castles().landscapeFilter(9, 0, [9, 9])).toBe(true)
  })
})
