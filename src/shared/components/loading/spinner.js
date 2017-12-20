import React from 'react'


const Spinner = ({ size = null }) => (
  <div className="row">
    <div className="col text-center">
      <i className="fa fa-spinner fa-spin" style={{fontSize: size || '100px'}} />
    </div>
  </div>
)

export default Spinner
