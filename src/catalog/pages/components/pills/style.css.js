import { StyleSheet, sizes } from '../../../../lib/css'

const styleSheet = StyleSheet.create({
  wrapper: {
    marginTop: `-${sizes.regular}`,
    marginLeft: `-${sizes.smallIii}`,
    marginRight: `-${sizes.smallIii}`
  },
  pill: {
    marginTop: sizes.regular,
    marginRight: sizes.smallIii,
    marginLeft: sizes.smallIii
  }
})

export default styleSheet
