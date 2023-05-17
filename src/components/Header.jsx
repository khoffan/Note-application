import React from 'react'

const Header = ({handletroggleMode}) => {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <button onClick={() =>handletroggleMode((previousDarkMode) => !previousDarkMode) } className='save'>Troggle mode</button>
    </div>
  )
}

export default Header