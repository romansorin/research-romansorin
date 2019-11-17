import React from 'react'
import { Link } from 'gatsby'

const Table = props => {
  return (
    <table className={`${props.className ? props.className + ' ' : ''}`}>
      {props.rows.map((row, i) => (
        <tr
          className={`${
            row.className ? row.className + ' ' : ''
          }odd:bg-white-1 even:bg-white-0 py-4`}
          key={i}
        >
          {row.columns.map((column, j) => (
            <td
              className={`${column.className ? column.className + ' ' : ''}${
                column.renderAs === 'text' ? 'text-text-2' : ''
              }`}
              key={j}
            >
              {column.renderAs === 'a' ? (
                <a href={column.href}>{column.text}</a>
              ) : (
                ''
              )}
              {column.renderAs === 'Link' ? (
                <Link to={column.to}>{column.text}</Link>
              ) : (
                ''
              )}
              {column.renderAs === 'button' ? (
                <button type={column.buttonType}>{column.text}</button>
              ) : (
                ''
              )}
              {column.renderAs === 'text' ? column.text : ''}
            </td>
          ))}
        </tr>
      ))}
    </table>
  )
}

export default Table
