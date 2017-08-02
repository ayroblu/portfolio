import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import GoMarkGithub from 'react-icons/lib/go/mark-github'
import './DrawerLayout.css'

class DrawerLayout extends Component {
  static propTypes = {
    open: PropTypes.bool
  }
  render() {
    return (
      <Drawer {...this.props}>
        <a className='Drawer-top no-dec' href='https://github.com/ayroblu'>
          <GoMarkGithub size={30} color='white'/><span>Ben's Profile</span>
        </a>
        <a href='#software'>
          <MenuItem>Software Development</MenuItem>
        </a>
        <a href='#npm'>
          <MenuItem>npm packages</MenuItem>
        </a>
        <a href='#medium'>
          <MenuItem>Medium articles</MenuItem>
        </a>
        <a href='#projects'>
          <MenuItem>Projects</MenuItem>
        </a>
        <a href='#react-native'>
          <MenuItem>React Native</MenuItem>
        </a>
        <a href='#android'>
          <MenuItem>Old Android Projects</MenuItem>
        </a>
        <a href='#other-projects'>
          <MenuItem>Other Projects</MenuItem>
        </a>
        <a href='#university'>
          <MenuItem>University of Auckland</MenuItem>
        </a>
        <a href='#archery'>
          <MenuItem>Archery</MenuItem>
        </a>
      </Drawer>
    )
  }
}

export default DrawerLayout
