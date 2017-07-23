import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import * as MathJax from 'react-mathjax-updated'
//import * as MathJax from 'react-mathjax'
import './App.css'

const vTerminal = `v_{terminal} = \\sqrt{\\frac{2 m g}{C_d A \\rho}}`
const vInitial = `v_{initial} = v_{arrow} \\times \\sin(\\theta)`
const uInitial = `v_{initial} = v_{arrow} \\times \\cos(\\theta)`
const v = `v = v_{terminal} \\times 
  \\frac{v_{initial} - v_{terminal} \\tan\\left(\\frac{t g}{v_{terminal}}\\right)}{
  v_{terminal} + v_{initial} \\tan\\left(\\frac{tg}{v_{terminal}}\\right)}`
const u = `u = \\frac{v_{terminal}^2 u_{initial}}{v_{terminal}^2 + g u_{initial} t}`
const velocity = `v_{abs} = \\sqrt{u^2 + v^2}`
const y = `y = \\frac{v_{terminal}^2}{2g} \\times \\log{\\left(\\frac{v_{initial}^2+v_{terminal}^2}{v^2 + v_{terminal}^2}\\right)}`
const x = `x = \\frac{v_{terminal}^2}{g} \\times \\log{\\left(\\frac{v_{terminal}^2 + g u_{initial} t}{v_{terminal}^2}\\right)}`

const targetAngle = `\\theta_{target} = \\tan^{-1}{\\left(\\frac{s_{vertical}}{s_{horizontal}}\\right)}`
const alpha = `\\alpha = \\theta_{target} - \\tan^{-1}{\\left(\\frac{s_{jaw} \\cos\\theta_{target}}{s_{horizontal}}\\right)}`
const phi = `\\phi = \\theta - \\alpha`
const sightHeight = `s_{sight} = s_{jaw} - s_{arm} \\tan(\\phi)`

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
`} />
        <MathJax.Context>
          <div className='mathjax-node-parent'>
            <MathJax.Node>{vTerminal}</MathJax.Node>
            <MathJax.Node>{vInitial}</MathJax.Node>
            <MathJax.Node>{uInitial}</MathJax.Node>
            <MathJax.Node>{v}</MathJax.Node>
            <MathJax.Node>{u}</MathJax.Node>
            <MathJax.Node>{velocity}</MathJax.Node>
            <MathJax.Node>{y}</MathJax.Node>
            <MathJax.Node>{x}</MathJax.Node>

            <MathJax.Node>{targetAngle}</MathJax.Node>
            <MathJax.Node>{alpha}</MathJax.Node>
            <MathJax.Node>{phi}</MathJax.Node>
            <MathJax.Node>{sightHeight}</MathJax.Node>
          </div>
        </MathJax.Context>

        <ReactMarkdown className='App-markdown' source={`
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
