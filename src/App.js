import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Ben Lu Portfolio</h1>
        </div>
        <p className="App-text">
          Hi, I'm a tinkerer and developer
        </p>
        <p className="App-text">
          Here's a list of things I do
        </p>
        <ReactMarkdown className='App-markdown' source={`
  # First

  * npm packages
      * db-difftool
          * CLI tool
          * Makes keeping track of databases easier
      * redux-add
          * CLI tool
      * react-native-redux-log-monitor
          * React native component
  * github
  * Medium posts
  * List of projects
      * Android (2013)
          * NZ Weather and Traffic
          * Archery Scorer
      * React Native
          * ArcheryNotes
      * First website
      * aklbuses.nz
      * webrec.ayro.nz
      * royalgameofur.site
      * archery.ayro.nz

  * Selenium screenshot testing - take a snapshot, if different (b64) then generate a difference html page?
      * You can literally run a test, if they're different, run a different test / function in a new browser window
          * Use selenium to upload this file to it and show the difference between two images
        `}/>
      </div>
    );
  }
}

export default App;
