const times = require('lodash/times')
/**
 * https://medium.com/@dtinth/spring-animation-in-css-2039de6e1a03
 */

const getSpringProgress = (time, damping = 8) => {
  return (
    -0.5 * (2.71828 ** (-6 * time)) *
    (-2 * (2.71828 ** (6 * time)) + Math.sin(damping * time) + 2 * Math.cos(damping * time))
  )
}

const interpolateLinearly = (start, end, progress) => start + progress * (end - start)

const defaultGetKeyframesTransform = val => val

const getKeyframes = (
  property,
  start,
  end,
  transform = defaultGetKeyframesTransform
) => {
  const keyframes = {}

  for (let i = 0; i <= 100; i++) {
    const keyframe = i / 100
    const progess = getSpringProgress(keyframe)
    const interpolated = interpolateLinearly(start, end, progess)

    keyframes[`${i}%`] = {
      [property]: transform(interpolated)
    }
  }

  return keyframes
}

const defaultStaggeredAnimationDelaySelector = (n) => `:nth-of-type(${n})`

/**
 * Produces an object of selector to animation delays, e.g.:
 *
 * ```
 * {
 *   ':nth-of-type(1)': {
 *     animationDelay: 100ms
 *   },
 *   ':nth-of-type(2)': {
 *     animationDelay: 200ms
 *   }
 * }
 * ```
 */
const getStaggeredAnimationDelay = (
  count,
  delay,
  offset = 0,
  selector = defaultStaggeredAnimationDelaySelector
) => {
  return times(count).reduce((delays, i) => {
    const n = i + 1

    delays[selector(n)] = {
      animationDelay: `${offset + delay * n}ms`
    }

    return delays
  }, {})
}

module.exports = {
  getKeyframes,
  getStaggeredAnimationDelay
}
