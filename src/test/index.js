/* eslint-env mocha */

let chai = require('chai')
let dirtyChai = require('dirty-chai')
let expect = chai.expect

chai.use(dirtyChai)

const components = require('../lib')

describe('Components', () => {
  it('works', () => {
    expect(components).to.be.an('object')
  })
})
