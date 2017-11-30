/* global expect */
/* eslint-env mocha */
const { mergeStyleSheets } = require('../../lib/css')

const inputOne = {
  root: 'Obi',
  foo: 'Luke',
  baz: 'Jar Jar'
}

describe('mergeStyleSheets', () => {
  it("merges multiple objects' values into arrays", () => {
    expect(
      mergeStyleSheets(
        inputOne,
        {
          root: 'Wan',
          foo: 'Skywalker',
          baz: 'Binks'
        },
        {
          root: 'Kenobi'
        }
      )
    ).to.eql({
      root: ['Obi', 'Wan', 'Kenobi'],
      foo: ['Luke', 'Skywalker'],
      baz: ['Jar Jar', 'Binks']
    })
  })

  it('accepts undefined or null sheets', () => {
    expect(mergeStyleSheets(inputOne, undefined)).to.eql({
      root: ['Obi'],
      foo: ['Luke'],
      baz: ['Jar Jar']
    })
  })

  it('accepts an empty stylesheet', () => {
    expect(mergeStyleSheets(inputOne, {})).to.eql({
      root: ['Obi'],
      foo: ['Luke'],
      baz: ['Jar Jar']
    })
  })
})
