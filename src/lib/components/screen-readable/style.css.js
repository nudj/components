const { StyleSheet } = require('../../css')

module.exports = StyleSheet.create({
  /*
   * Hidden element for accessibility purposes - providing more context for screen readers
   * See: https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
   */
  root: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    /*
     * Ensures whitespace isn't ignored:
     * https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe#.e3i0smk0t
     */
    whiteSpace: 'nowrap'
  }
})
