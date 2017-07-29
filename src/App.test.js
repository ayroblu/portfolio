import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
//import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  , div)

  //const tree = renderer.create(
  //  <App />
  //).toJSON()
  //expect(tree).toMatchSnapshot()
})
