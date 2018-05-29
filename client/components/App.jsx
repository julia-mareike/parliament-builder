import React from 'react'
import {connect} from 'react-redux'

const App = () => (
  <div className='app-container'>
<p>Hello</p>
  </div>
)

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(App)
