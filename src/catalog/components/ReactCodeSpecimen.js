import React from 'react'
import { ReactSpecimen, CodeSpecimen } from 'catalog'

const getStyle = () => ({
  codeSpecimenWrapper: {
    marginTop: '-48px'
  }
})

const ReactCodeSpecimen = ({ children, code, span, ...rest }) => {
  const styles = getStyle()

  return (
    <div style={{ minWidth: '600px' }}>
      <ReactSpecimen {...rest} span={span} noSource>
        {children}
      </ReactSpecimen>
      <div style={styles.codeSpecimenWrapper}>
        <CodeSpecimen {...rest} span={span} lang='jsx'>
          {code}
        </CodeSpecimen>
      </div>
    </div>
  )
}

ReactCodeSpecimen.defaultProps = {
  span: 5
}

export default ReactCodeSpecimen
