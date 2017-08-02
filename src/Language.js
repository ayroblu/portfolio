import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Language.css'

class Language extends Component {
  static propTypes = {
    children: PropTypes.node
  , title: PropTypes.node
  , description: PropTypes.node
  , proficiency: PropTypes.node
  }
  render() {
    const {children, title, description, proficiency} = this.props
    // Okay, so Title is Icon, maxwidth maxheight, add a description
    return (
      <div className='Language'>
        <div className='Language-title'>
          {title}
        </div>
        <div className='Language-description'>
          {description}
        </div>
        <div className='Language-content'>
          {children}
        </div>
        <div className='Language-proficiency'>
          Proficiency: {proficiency}
        </div>
      </div>
    )
  }
}

export default Language
