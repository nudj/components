const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.use(require('dirty-chai'))
chai.use(require('sinon-chai'))
global.expect = chai.expect

const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-15')

configure({ adapter: new Adapter() })

global.asyncTest = fn => {
  return async () => {
    try {
      return await fn()
    } catch (error) {
      if (error.name === 'AssertionError') {
        throw error
      } else {
        // handle custom errors from @nudj/framework/errors
        throw new Error(
          [error.stack, ...(error.log || [])]
            .map(item => {
              if (typeof item !== 'object') return item
              return JSON.stringify(item, null, 2)
            })
            .join(' ')
        )
      }
    }
  }
}
