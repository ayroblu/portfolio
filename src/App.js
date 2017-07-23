import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import * as MathJax from 'react-mathjax-updated'
//import * as MathJax from 'react-mathjax'
import './App.css'

const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`
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
        <MathJax.Context>
            <div>
                This is an inline math formula: <MathJax.Node inline>{'a = b'}</MathJax.Node>
                And a block one:

                <MathJax.Node>{tex}</MathJax.Node>
            </div>
        </MathJax.Context>
        <p className="App-text">
          As a developer I focus primarily on javascript projects, but have experience in Java, Ruby(on Rails), python, php, C, C++, C#, Visual Basic
        </p>
        <p className="App-text">
          Here's a list of things I do
        </p>
        <ReactMarkdown className='App-markdown' source={`
# Who am I
* Archery
  * I have a recurve, compound and horsebow
  * I've made a couple of apps to help with my Archery
  * Solve these equations for arrow flight
    * Insert LaTeX equations here

* University of Auckland
  * Bachelor of Engineering (Honours) specialising in Engineering Science
    * Operations Research
    * Fluid Dynamics
    * Geothermal Engineering
    * Software Engineering
  * Bachelor of Commerce majoring in Economics
    * Economics
    * Finance

# What I do
* Machine Learning

* Javascript: This is my primarily language
* npm packages
    * db-difftool
        * CLI tool
        * Makes keeping track of databases easier
        * https://github.com/ayroblu/db-difftool
    * redux-add
        * CLI tool for adding redux files
        * https://github.com/ayroblu/redux-add
    * react-native-redux-log-monitor
        * React native component for using with react-native for displaying redux without js debugging
        * https://github.com/ayroblu/react-native-redux-log-monitor
    * object-type-check
      * This adds a basic type check at runtime thus allowing for a simple type check of objects
      * https://github.com/ayroblu/object-type-check
      * Testing for types
* github
  * https://github.com/ayroblu
* Medium posts
  * https://hackernoon.com/server-side-rendering-with-create-react-app-1faf5a9d1eff
    * Source Code: https://github.com/ayroblu/ssr-create-react-app
  * https://medium.com/@benlu/ssr-with-create-react-app-v2-1b8b520681d9
    * Source Code: https://github.com/ayroblu/ssr-create-react-app-v2
    * Demo Deployed: https://ssr-cra-v2.now.sh/
* List of projects
    * Android (2013)
        * NZ Weather and Traffic
          * https://play.google.com/store/apps/details?id=benl.student.datacol&hl=en
        * Archery Scorer
          * https://play.google.com/store/apps/details?id=benl.student.archeryscorer
    * React Native
        * ArcheryNotes
          * https://github.com/ayroblu/ArcheryNotes
          * JS Testing: Jest + snapshot testing
    * First website
      http://ben-l.com
    * aklbuses.nz
      * Live Auckland Buses
      * Shows the locations of Auckland buses in real time to the nearest 30 seconds
      * https://github.com/ayroblu/aklbuses.nz
    * webrec.ayro.nz
      * Video Delay
      * Simply uses chrome's video support, delays video for archery coaching
      * https://github.com/ayroblu/video-delay
    * royalgameofur.site
      * Royal Game of Ur
      * An implementation of the Royal Game of Ur based on: https://www.youtube.com/watch?v=WZskjLq040I
      * https://github.com/ayroblu/royal-game-of-ur
    * ayro.nz
      * https://ayro.nz/
      * Contact page: for business enquiries
    * archery.ayro.nz
      * https://archery.ayro.nz/
      * JS Testing: Jest + equation solving
* Selenium screenshot testing - take a snapshot, if different (b64) then generate a difference html page?
    * You can literally run a test, if they're different, run a different test / function in a new browser window
        * Use selenium to upload this file to it and show the difference between two images


        `}/>
      </div>
    );
  }
}

export default App;
