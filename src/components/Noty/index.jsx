import Noty from 'noty'
import React from 'react'
import {connect} from 'react-redux'

function NotyToaster({noty}) {

  if (noty.type && noty.message) {
    (new Noty({
      text: noty.message,
      type: noty.type,
      timeout: 1000
    })).show()
  }

  return <div></div>
}

export default connect(state => ({
  noty: state.noty
}))(NotyToaster)
