import React from 'react'
import { Router } from '@reach/router'

import {
  ReferencesPage,
  ReferencePage,
  EditReferencePage,
  CreateReferencePage
} from './references/index'

const References = () => {
  return (
    <div>
      <Router>
        <ReferencesPage path='/references' />
        <ReferencePage path='/references/:reference' />
        <EditReferencePage path='/references/:reference/edit' />
        <CreateReferencePage path='/references/create' />
      </Router>
    </div>
  )
}

export default References
