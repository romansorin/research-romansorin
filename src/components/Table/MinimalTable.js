import React, { useState, useEffect } from 'react'

import Table from 'table'

const MinimalTable = (props, { data }) => {
  const [table, setTable] = useState()

  useEffect(() => {}, [])

  return <Table {...props} {...table} />
}

export default MinimalTable
