import { StyleSheet, sizes } from '../../../../lib/css'

const styleSheet = StyleSheet.create({
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
})

export default styleSheet
