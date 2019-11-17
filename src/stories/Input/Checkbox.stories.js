import React, { useState } from 'src/stories/Input/react'

import { Wrapper, Row } from 'src/stories/Input/Stories/layout'
import { Checkbox } from 'src/stories/Input/Components/Checkbox'

export default { title: 'Input/Checkbox' }

export const base = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Wrapper>
      <Row info='Unchecked'>
        <Checkbox
          name='checkbox-1'
          id='checkbox-1'
          checked={checked}
          onChange={() => setChecked(!checked)}
          height={24}
          width={24}
          label='Checkbox'
        />
      </Row>
      <Row info='Checked'>
        <Checkbox height={24} width={24} label='Checkbox' />
      </Row>
    </Wrapper>
  )
}
