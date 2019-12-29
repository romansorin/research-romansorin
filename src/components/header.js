import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { SecondaryButton } from "Components/Button"

const Header = ({ siteTitle }) => (
  <header className='py-5 px-8 text-lg'>
    <div className='container mx-auto flex flex-row'>
      <Link className='hover:text-theme-2 my-auto mr-auto text-text-3' to='/'>
        Research
      </Link>
      <Link
        className='hover:text-theme-2 my-auto mx-5 text-text-3'
        to='/whitepaper'
      >
        Whitepaper
      </Link>
      <Link
        className='hover:text-theme-2 my-auto mx-5 text-text-3'
        to='/references'
      >
        References
      </Link>
      <Link className='hover:text-theme-2 my-auto mx-5 text-text-3' to='/blog'>
        Blog
      </Link>
      <Link to='/paper'>
        <SecondaryButton className='px-6 ml-4' variant={0}>
          Paper
        </SecondaryButton>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
