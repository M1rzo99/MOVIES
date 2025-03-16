import React from 'react'
import './spinner.scss'
import PropTypes from 'prop-types'
function Spinner() {
  return (
    <div className='center'>
      <div className='loader'/>
    </div>
  )
}
Spinner.propTypes={
  width: PropTypes.number
}
export default Spinner