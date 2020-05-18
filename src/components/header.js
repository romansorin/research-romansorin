import { SecondaryButton } from 'Components/Button'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className='px-8 py-5 text-lg'>
    <div className='container flex flex-row mx-auto'>
      <Link className='my-auto mr-auto hover:text-theme-2 text-text-3' to='/'>
        Research
      </Link>
      {/* <Link
        className='mx-5 my-auto hover:text-theme-2 text-text-3'
        to='/whitepaper'
      >
        Whitepaper
      </Link> */}
      <Link
        className='mx-5 my-auto hover:text-theme-2 text-text-3'
        to='/references'
      >
        References
      </Link>
      {/* <Link className='mx-5 my-auto hover:text-theme-2 text-text-3' to='/blog'>
        Blog
      </Link>
      <Link to='/paper'>
        <SecondaryButton className='px-8 ml-4' variant={0}>
          Paper
        </SecondaryButton>
      </Link> */}
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
