/* global expect */
/* eslint-env mocha */

const svgSanitise = require('../../../lib/icons/svg-sanitiser')

describe('Svg sanitiser', () => {
  it('santises provided svg', () => {
    const svg = [
      '<svg version="1.1" width="20" height="30" stroke="#FFF" x="0px" y="0px" viewBox="0 0 24 24">',
      '<g class="nc-icon-wrapper">',
      '<polyline fill="#0F0" data-color="color-2" stroke-width="10" stroke-linejoin="round"></polyline>',
      '</g>',
      '</svg>'
    ].join('')

    const sanitisedResult = [
      '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24">',
      '<g class="nc-icon-wrapper">',
      '<polyline data-color="color-2" stroke-width="10" stroke-linejoin="round"></polyline>',
      '</g>',
      '</svg>'
    ].join('')

    expect(svgSanitise(svg)).to.equal(sanitisedResult)
  })

  it('removes specified width', () => {
    const svg = '<svg width="10" viewBox="0 0 24 24"><g></g></svg>'
    expect(svgSanitise(svg)).to.not.include('width="10"')
  })

  it('removes specified height', () => {
    const svg = '<svg height="10" viewBox="0 0 24 24"><g></g></svg>'
    expect(svgSanitise(svg)).to.not.include('height="10"')
  })

  it('removes specified stroke style', () => {
    const svg = '<svg stroke="#F00" viewBox="0 0 24 24"><g></g></svg>'
    expect(svgSanitise(svg)).to.not.include('stroke="#F00"')
  })

  it('removes stroke and width without removing stroke-width', () => {
    const svg = '<svg width="10" stroke="#511" width="14" stroke-width="3" viewBox="0 0 24 24"><g></g></svg>'
    expect(svgSanitise(svg)).to.include('stroke-width="3"')
    expect(svgSanitise(svg)).to.not.include('width="10"')
    expect(svgSanitise(svg)).to.not.include('stroke="#511"')
  })

  it('removes specified fill colour', () => {
    const svg = '<svg viewBox="0 0 24 24"><g fill="#FFF"></g></svg>'
    expect(svgSanitise(svg)).to.equal('<svg viewBox="0 0 24 24"><g></g></svg>')
  })
})
