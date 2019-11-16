import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ className, title, authors }) => {
  return (
    <div className={className}>
      <h1 className='text-text-2 text-4xl md:text-5xl leading-snug font-medium'>
        {title}
      </h1>
      <h2 className='text-text-2 text-base md:text-lg'>
        {authors.map((author, i) => {
          if (i < authors.length - 1) return `${author}, `
          else return author
        })}
      </h2>
    </div>
  )
}

Heading.propTypes = {
  authors: PropTypes.array
}

Heading.defaultProps = {
  authors: []
}

export default Heading
