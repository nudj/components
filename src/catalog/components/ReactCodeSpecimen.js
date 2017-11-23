import React from 'react'
import { ReactSpecimen, CodeSpecimen } from 'catalog'

const getStyle = () => ({
  codeSpecimenWrapper: {
    marginTop: '-48px'
  }
})

const ReactCodeSpecimen = ({ children, code, span }) => {
  const styles = getStyle()

  return (
    <div>
      <ReactSpecimen span={span} noSource>
        {children}
      </ReactSpecimen>
      <div style={styles.codeSpecimenWrapper}>
        <CodeSpecimen span={span} lang='jsx'>
          {code}
        </CodeSpecimen>
      </div>
    </div>
  )
}

export default ReactCodeSpecimen
