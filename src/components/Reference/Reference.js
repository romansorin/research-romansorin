import React, { useEffect, useState } from 'react'

import Heading from './Heading'
import Aside from './Aside'
import Main from './Main'

const Reference = props => {
  return (
    <section>
      <Heading
        className='md:mb-24'
        title={props.title}
        authors={props.authors}
      />
      <div className='flex flex-col md:flex-row'>
        <Aside
          downloadUrl={props.storage_url}
          className='md:pr-16 md:mb-0 mb-10'
          date={props.date_posted}
        />
        <Main referenceUrl={props.storage_url} citation={props.citation}>
          {props.summary}
        </Main>
      </div>
    </section>
  )
}

export default Reference
