import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => (
  <header className='py-8 px-8 tracking-tight text-xl'>
    <div className='container mx-auto flex flex-row'>
      <Link className='ml-auto hover:text-theme-2 text-text-3' to='/references'>
        References
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
