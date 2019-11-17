import React from 'react'
import { Router } from '@reach/router'

import { ReferencesPage, ReferencePage } from './references/index'

const References = () => {
  return (
    <div>
      <Router>
        <ReferencesPage path='/references' />
        <ReferencePage path='/references/:reference' />
      </Router>
    </div>
  )
}

export default References
