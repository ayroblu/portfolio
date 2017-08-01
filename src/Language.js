import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Language.css'

class Language extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render() {
    const {children} = this.props
    return (
      <div className='Language'>
        {children}
      </div>
    )
  }
}

export default Language
