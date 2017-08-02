import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import LinkIcon from 'react-icons/lib/fa/external-link'
import './TitleLink.css'

class TitleLink extends Component {
  static propTypes = {
  }
  render() {
    const {children} = this.props
    return (
      <h3 className='TitleLink'>
        {children}
        <LinkIcon color='#888' size={16} />
      </h3>
    )
  }
}

export default TitleLink
