import { css, sizes } from '../../../../lib/css'

const style = {
  wrapper: {
    marginTop: `-${sizes.regular}`,
    marginLeft: `-${sizes.smallIi}`,
    marginRight: `-${sizes.smallIi}`
  },
  button: {
    marginTop: sizes.regular,
    marginRight: sizes.smallIi,
    marginLeft: sizes.smallIi
  }
}

export default css(style)
