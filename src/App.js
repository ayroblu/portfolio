import React, { Component } from 'react'
import * as MathJax from 'react-mathjax-updated'
import GoMarkGithub from 'react-icons/lib/go/mark-github'
import MenuItem from 'material-ui/MenuItem'
import 'devicon/devicon-colors.css'

import MediumArticles from './MediumArticles'
import Software from './Software'
import DrawerLayout from './DrawerLayout'
import {cn} from './utils'
import mediumLogo from './img/medium-lockup-dark.png'
import npmLogo from './img/npm.png'
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
  componentWillMount(){
    this.state = {open: window.innerWidth > 600}
  }
  componentDidMount() {
    window.addEventListener("resize", this.updatePage)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePage)
  }
  updatePage = ()=>{
    const docked = window.innerWidth > 600
    if (docked) {
      this.setState({open: true})
      return
    }
    this.forceUpdate()
  }
  render() {
    const docked = window.innerWidth > 600
    return (
      <div className={cn("App", docked && 'docked')}>
        <DrawerLayout open={this.state.open}
          docked={docked}
          onRequestChange={open=>this.setState({open})}
          width={200}
        />
        <div className="App-header">
          <h1>Ben Lu Portfolio</h1>
        </div>
        <div className='App-content'>
          <div>
            <p className="App-text">
              Hi, I'm a tinkerer and developer
            </p><a href='https://github.com/ayroblu'><GoMarkGithub size={30} /></a>
          </div>
          <div id='software'>
            <Software />
          </div>
          <div id='npm' className="App-text">
            <img className='npm-logo' src={npmLogo} alt='npm logo' />
            <div>
              <div>
                <a href='https://www.npmjs.com/package/object-type-check'>
                  <MenuItem>
                    Object Type Check
                  </MenuItem>
                </a>
                <div>
                  <p>This is a runtime type checker, I wrote this for verifying serialised data</p>
                </div>
              </div>
              <div>
                <a href='https://www.npmjs.com/package/react-native-redux-log-monitor'>
                  <MenuItem>
                    React Native Redux DevTools Log Monitor
                  </MenuItem>
                </a>
                <div>
                  <p>React Native Navigation has a very easy drawer system, which means you can add this for a slide in from the right option to display redux data without needing to use JS Debugging</p>
                </div>
              </div>
              <div>
                <a href='https://www.npmjs.com/package/db-difftool'>
                  <MenuItem>
                    DB Difftool
                  </MenuItem>
                </a>
                <div>
                  <p>Rather than using migrations, its probably easier just to calculate a diff between a lock configuration and an existing database</p>
                </div>
              </div>
              <div>
                <a href='https://www.npmjs.com/package/redux-add'>
                  <MenuItem>
                    Redux Add
                  </MenuItem>
                </a>
                <div>
                  <p>A simple CLI tool for adding a couple of redux files</p>
                </div>
              </div>
            </div>
          </div>
          <div id='medium'>
            <img className='medium-logo' src={mediumLogo} alt='medium logo' />
            <MediumArticles />
          </div>
          <div id='projects'>
            <h2>Projects</h2>
            <div>
              <h3>Live Auckland Buses</h3>
              <p><a href='http://aklbuses.nz'>aklbuses.nz</a></p>
              <p>Shows the locations of Auckland buses in real time to the nearest 30 seconds</p>
              <p>https://github.com/ayroblu/aklbuses.nz</p>
            </div>
            <div>
              <h3>Video Delay</h3>
              <p><a href='http://webrec.ayro.nz'>Video Delay</a></p>
              <p>Uses electron for a basic native app</p>
              <p>https://github.com/ayroblu/video-delay</p>
            </div>
            <div>video-delay</div>
            <div>object-type-check?</div>
          </div>
          <div id='react-native' className="App-text">
            <h3>React Native</h3>
            <div>Archery Notes - Android + iOS, thoughts, Code push ?</div>
            <div>Repo: <a href='https://github.com/ayroblu/ArcheryNotes'>https://github.com/ayroblu/ArcheryNotes</a></div>
            <div>Jest + snapshot testing</div>
          </div>
          <div id='android' className="App-text">
            <h3>Old Android Projects (2013)</h3>
            <a href='https://play.google.com/store/apps/details?id=benl.student.archeryscorer'>
              <p>Archery Scorer</p>
            </a>
            <a href='https://play.google.com/store/apps/details?id=benl.student.datacol&hl=en'>
              <p>NZ Weather and Traffic</p>
            </a>
          </div>
          <div id='other-projects' className="App-text">
            <h2>Other Projects</h2>
            <div>
              <h3>Royal Game of Ur</h3>
              <p><a href='http://royalgameofur.site'>royalgameofur.site</a></p>
              <p>An implementation of the Royal Game of Ur based on: https://www.youtube.com/watch?v=WZskjLq040I</p>
              <p>https://github.com/ayroblu/royal-game-of-ur</p>
            </div>
            <div>
              <h3>Ayro Site</h3>
              <p><a href='https://ayro.nz'>ayro.nz</a></p>
              <p>Contact page: for business enquiries</p>
            </div>
            <div>
              <h3>Archery Calculator</h3>
              <p>archery.ayro.nz</p>
              <p>JS Testing: Jest + equation solving</p>
            </div>
            <div>
              <h3>My First Site</h3>
              <p>ben-l.com</p>
            </div>
            <div>webgl?</div>
            <div>selenium test?</div>
          </div>
          <div id='university' className="App-text">
            <h2>University of Auckland - Bachelor of Commerce</h2>
            <p>Major in Economics: (just show some old notes?)</p>
            <p>Finance</p>
          </div>
          <div className="App-text">
            <h2> University of Auckland - Bachelor of Engineering (Honours)</h2>
            <p>4th year project + video -> ANSYS</p>
            <p>Geothermal</p>
            <p>Operations Research</p>
            <p>Fluid Dynamics</p>
            <p>Software Development</p>
          </div>
          <div className="App-text">
            <h2>University of Washington - Exchange</h2>
            <p>photos</p>
          </div>
          <div id='archery' className="App-text">
            <h2>Archery</h2>
            <p>Photos of all 3 bows</p>
            <h3>Projectile Motion equations</h3>
            <p>These are just some basic projectile motion equations which allow you to solve for arrow positioning</p>
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
          </div>
        </div>
      </div>
    )
  }
}

export default App
