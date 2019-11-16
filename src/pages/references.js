import React from 'react'
import { Router } from '@reach/router'
import Reference from './references/reference'
import ReferencesPage from './references/references'

const References = () => {
  return (
    <div>
      <Router>
        <ReferencesPage path='/references' />
        <Reference path='/references/:reference' />
      </Router>
    </div>
  )
}

export default References
