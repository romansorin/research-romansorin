import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Button } from 'Components/Button'

const Header = ({ siteTitle }) => (
  <div>
    <Button>Yo</Button>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
