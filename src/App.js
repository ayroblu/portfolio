import React, { Component } from 'react'
import * as MathJax from 'react-mathjax-updated'
import GoMarkGithub from 'react-icons/lib/go/mark-github'
import MenuItem from 'material-ui/MenuItem'
import 'devicon/devicon-colors.css'

import TitleLink from './TitleLink'
import MediumArticles from './MediumArticles'
import Software from './Software'
import DrawerLayout from './DrawerLayout'
import {cn} from './utils'
import mediumLogo from './img/medium-lockup-dark.png'
import gplayLogo from './img/google-play-badge.png'
import npmLogo from './img/npm.png'
import * as theme from './theme'
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
            </p><a className='no-color' href='https://github.com/ayroblu'><GoMarkGithub size={30} /></a>
          </div>
          <div id='software'>
            <h2 className='SectionTitle'>
              Software Skills
            </h2>
            <Software />
          </div>
          <div id='npm' className="App-text">
            <div className='SectionTitle'>
              <img className='npm-logo' src={npmLogo} alt='npm logo' />
            </div>
            <div>
              <div>
                <TitleLink>
                  <a href='https://www.npmjs.com/package/object-type-check'>
                    Object Type Check
                  </a>
                </TitleLink>
                <div>
                  <a href='https://coveralls.io/github/ayroblu/object-type-check?branch=master'>
                    <img src='https://coveralls.io/repos/github/ayroblu/object-type-check/badge.svg?branch=master' />
                  </a>
                  <p>This is a runtime type checker, I wrote this for verifying serialised data, has 100% test coverage</p>

                </div>
              </div>
              <div>
                <TitleLink>
                  <a href='https://www.npmjs.com/package/react-native-redux-log-monitor'>
                    React Native Redux DevTools Log Monitor
                  </a>
                </TitleLink>
                <div>
                  <p>React Native Navigation has a very easy drawer system, which means you can add this for a slide in from the right option to display redux data without needing to use JS Debugging</p>
                </div>
              </div>
              <div>
                <TitleLink>
                  <a href='https://www.npmjs.com/package/db-difftool'>
                    DB Difftool
                  </a>
                </TitleLink>
                <div>
                  <p>Rather than using migrations, its probably easier just to calculate a diff between a lock configuration and an existing database</p>
                </div>
              </div>
              <div>
                <TitleLink>
                  <a href='https://www.npmjs.com/package/redux-add'>
                    Redux Add
                  </a>
                </TitleLink>
                <div>
                  <p>A simple CLI tool for adding a couple of redux files</p>
                </div>
              </div>
            </div>
          </div>
          <div id='medium'>
            <div className='SectionTitle'>
              <img className='medium-logo' src={mediumLogo} alt='medium logo' />
            </div>
            <MediumArticles />
          </div>
          <div id='projects'>
            <h2 className='SectionTitle'>Projects</h2>
            <div>
              <TitleLink><a href='https://aklbuses.nz'>Live Auckland Buses</a></TitleLink>
              <p>Shows the locations of Auckland buses in real time to the nearest 30 seconds</p>
              <p>https://github.com/ayroblu/aklbuses.nz</p>
            </div>
            <div>
              <TitleLink><a href='https://webrec.ayro.nz'>Video Delay</a></TitleLink>
              <p>Uses electron for a basic native app</p>
              <p>https://github.com/ayroblu/video-delay</p>
            </div>
            <div>video-delay</div>
            <div>object-type-check?</div>
          </div>
          <div id='react-native' className="App-text">
            <h2 className='SectionTitle'>React Native</h2>
            <div>Archery Notes - Android + iOS, thoughts, Code push ?</div>
            <div>Repo: <a href='https://github.com/ayroblu/ArcheryNotes'>https://github.com/ayroblu/ArcheryNotes</a></div>
            <div>Jest + snapshot testing</div>
          </div>
          <div id='android' className="App-text">
            <h2 className='SectionTitle'>Old Android Projects (2013)</h2>
            <p>Archery Scorer</p>
            <a href='https://play.google.com/store/apps/details?id=benl.student.archeryscorer'>
              <img src={gplayLogo} className='GoogleLink' alt='Archery Scorer Link' />
            </a>
            <p>NZ Weather and Traffic</p>
            <a href='https://play.google.com/store/apps/details?id=benl.student.datacol&hl=en'>
              <img src={gplayLogo} className='GoogleLink' alt='NZ Weather and Traffic Link' />
            </a>
          </div>
          <div id='other-projects' className="App-text">
            <h2 className='SectionTitle'>Other Projects</h2>
            <div>
              <TitleLink><a href='http://royalgameofur.site'>Royal Game of Ur</a></TitleLink>
              <p>Based on this fantastic video, where the basic rules are explained</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/WZskjLq040I" frameBorder="0" allowFullScreen></iframe>
              <p>https://github.com/ayroblu/royal-game-of-ur</p>
            </div>
            <div>
              <TitleLink><a href='https://ayro.nz'>Ayro Site</a></TitleLink>
              <p>Contact page: for business enquiries</p>
            </div>
            <div>
              <TitleLink><a href='https://archery.ayro.nz'>Archery Calculator</a></TitleLink>
              <p>JS Testing: Jest + equation solving</p>
            </div>
            <div>
              <TitleLink><a href='http://ben-l.com'>My First Site</a></TitleLink>
              <p>This is my first ever website, hosted on google apps, with python, and has a pretty nice transition which was built to be compatible (limited) with ie6</p>
            </div>
            <div>webgl?</div>
            <div>selenium test?</div>
          </div>
          <div id='university' className="App-text">
            <h2 className='SectionTitle'>University</h2>
            <div>
              <h3>University of Auckland - Bachelor of Commerce</h3>
              <p>Major in Economics: (just show some old notes?)</p>
              <p>Finance</p>
            </div>
            <div className="App-text">
              <h3> University of Auckland - Bachelor of Engineering (Honours)</h3>
              <p>4th year project + video -> ANSYS</p>
              <p>Geothermal</p>
              <p>Operations Research</p>
              <p>Fluid Dynamics</p>
              <p>Software Development</p>
            </div>
            <div className="App-text">
              <h3>University of Washington - Exchange</h3>
              <p>photos</p>
            </div>
          </div>
          <div id='archery' className="App-text">
            <h2 className='SectionTitle'>Archery</h2>
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
          <div>
            <h2>Palette</h2>
            <div style={{backgroundColor: theme.gold, width: 50, height: 50, margin: 'auto'}} />
            <div style={{backgroundColor: theme.orange, width: 50, height: 50, margin: 'auto'}} />
            <div style={{backgroundColor: theme.red, width: 50, height: 50, margin: 'auto'}} />
            <div style={{backgroundColor: theme.purple, width: 50, height: 50, margin: 'auto'}} />
            <div style={{backgroundColor: theme.grey, width: 50, height: 50, margin: 'auto'}} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
