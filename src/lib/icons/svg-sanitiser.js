const cleanups = {
  width: / +width="\d+(\.\d+)?(px)?"/gi,
  height: / +height="\d+(\.\d+)?(px)?"/gi,
  fill: / +fill="(none|#[0-9a-f]+)"/gi,
  stroke: / +stroke="(none|#[0-9a-f]+)"/gi
}

const svgSanitise = (svg) => Object.keys(cleanups)
  .reduce((accumulator, key) => accumulator.replace(cleanups[key], ''), svg)
  .trim()

module.exports = svgSanitise
