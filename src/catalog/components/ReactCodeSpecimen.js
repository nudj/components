import React from 'react'
import { ReactSpecimen, CodeSpecimen } from 'catalog'

const getStyle = () => ({
  codeSpecimenWrapper: {
    marginTop: '-48px'
  }
})

const ReactCodeSpecimen = ({ children, code }) => {
  const styles = getStyle()

  return (
    <div>
      <ReactSpecimen noSource>{children}</ReactSpecimen>
      <div style={styles.codeSpecimenWrapper}>
        <CodeSpecimen lang='jsx'>{code}</CodeSpecimen>
      </div>
    </div>
  )
}

export default ReactCodeSpecimen
