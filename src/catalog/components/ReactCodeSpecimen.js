import React from 'react'
import { ReactSpecimen, CodeSpecimen } from 'catalog'

const getStyle = () => ({
  codeSpecimenWrapper: {
    marginTop: '-48px'
  }
})

const ReactCodeSpecimen = ({ children, code, ...rest }) => {
  const styles = getStyle()

  return (
    <div>
      <ReactSpecimen {...rest} noSource>
        {children}
      </ReactSpecimen>
      <div style={styles.codeSpecimenWrapper}>
        <CodeSpecimen {...rest} lang="jsx">
          {code}
        </CodeSpecimen>
      </div>
    </div>
  )
}

export default ReactCodeSpecimen
