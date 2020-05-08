import Noty from 'noty'
import React from 'react'
import {connect} from 'react-redux'

function NotyToaster({noty}) {

  if (noty.type && noty.text) {
    (new Noty({
      ...noty,
    })).show()
  }

  return <div></div>
}

export default connect(state => ({
  noty: state.noty
}))(NotyToaster)
