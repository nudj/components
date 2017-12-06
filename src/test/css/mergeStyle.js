/* global expect */
/* eslint-env mocha */
const { mergeStyle } = require('../../lib/css')

describe('mergeStyle', () => {
  it('removes null items', () => {
    expect(mergeStyle([null])).to.eql([])
  })

  it('removes undefined items', () => {
    expect(mergeStyle([undefined])).to.eql([])
  })

  it('flattens nested styles', () => {
    const input = [{}, [{}, {}]]

    expect(mergeStyle(input)).to.eql([{}, {}, {}])
  })
})
