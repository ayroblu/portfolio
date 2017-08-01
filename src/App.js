import React, { Component } from 'react'
import * as MathJax from 'react-mathjax-updated'
import GoMarkGithub from 'react-icons/lib/go/mark-github'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import Language from './Language'
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
        <Drawer open={this.state.open}
          docked={docked}
          onRequestChange={open=>this.setState({open})}
          width={200}
        >
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
        <div className="App-header">
          <h1>Ben Lu Portfolio</h1>
        </div>
        <div className='App-content'>
          <div>
            <p className="App-text">
              Hi, I'm a tinkerer and developer
            </p><a href='https://github.com/ayroblu'><GoMarkGithub size={30} /></a>
          </div>
          <div id='software' className="App-text Languages">
            <Language
            >
              <div>JavaScript</div>
              <div>React</div>
              <div>React Native</div>
              <div>React Router (and others)</div>
              <div>Redux</div>
              <div>Flow</div>
              <div>Electron</div>
              <div>ESLint</div>
              <div>Angular</div>
              <div>Stars: 4.5</div>
            </Language>
            <Language
            >
              <div>C/C++</div>
              <div>(look at Endace framework)</div>
            </Language>
            <Language
            >
              <div>Python</div>
              <div>Django</div>
              <div>numpy</div>
              <div>OpenCV</div>
            </Language>
            <Language
            >
              <div>PHP</div>
              <div>Yii</div>
              <div>Symfony</div>
            </Language>
            <Language
            >
              <div>C#</div>
              <div>Visual Basic</div>
              <div>ASP.NET MVC</div>
              <div>LINQ</div>
              <div>Razor</div>
              <div>NuGet</div>
            </Language>
            <Language
            >
              <div>SQL</div>
              <div>PostgreSQL</div>
              <div>MySQL</div>
              <div>SQL Server</div>
            </Language>
            <Language
            >
              <div>LaTeX</div>
              <div>Reports</div>
            </Language>
            <Language
            >
              <div>Ruby on Rails</div>
              <div>JSON API</div>
              <div>Geolocation</div>
              <div>Active Record</div>
              <div>Common web pages and generators</div>
            </Language>
            <Language
            >
              <div>Java</div>
              <div>Swing</div>
              <div>Spring</div>
              <div>Hibernate</div>
              <div>Kotlin</div>
              <div>Android</div>
              <div>Stars: 3</div>
            </Language>
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
          <div id='medium' className="App-text">
            <img className='medium-logo' src={mediumLogo} alt='medium logo' />
            <div>
              <a href='https://medium.com/@benlu/css-animation-fill-mode-7f39417f56ad'>
                CSS Animation Fill Mode
              </a>
              <p>Date: 2017-06-??</p>
            </div>
            <div>
              <a href='https://medium.com/@benlu/ssr-with-create-react-app-v2-1b8b520681d9'>
                SSR with Create React App v2
              </a>
              <p>Date: 2017-06-??</p>
              <p>Source Code: https://github.com/ayroblu/ssr-create-react-app-v2</p>
              <p>Demo: https://ssr-cra-v2.now.sh</p>
            </div>
            <div>
              <a href='https://hackernoon.com/server-side-rendering-with-create-react-app-1faf5a9d1eff'>
                Server Side Rendering with Create React App
              </a>
              <p>Date: 2017-06-??</p>
              <p>Source Code: https://github.com/ayroblu/ssr-create-react-app</p>
            </div>
          </div>
          <div id='projects' className="App-text">
            <h2>Projects</h2>
            <div>
              <h2>Live Auckland Buses</h2>
              <p><a href='http://aklbuses.nz'>aklbuses.nz</a></p>
              <p>Shows the locations of Auckland buses in real time to the nearest 30 seconds</p>
              <p>https://github.com/ayroblu/aklbuses.nz</p>
            </div>
            <div>
              <h2>Video Delay</h2>
              <p><a href='http://webrec.ayro.nz'>Video Delay</a></p>
              <p>Uses electron for a basic native app</p>
              <p>https://github.com/ayroblu/video-delay</p>
            </div>
            <div>video-delay</div>
            <div>object-type-check?</div>
          </div>
          <div id='react-native' className="App-text">
            <h2>React Native</h2>
            <div>Archery Notes - Android + iOS, thoughts, Code push ?</div>
            <div>Repo: <a href='https://github.com/ayroblu/ArcheryNotes'>https://github.com/ayroblu/ArcheryNotes</a></div>
            <div>Jest + snapshot testing</div>
          </div>
          <div id='android' className="App-text">
            <h2>Old Android Projects (2013)</h2>
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
              <h2>Royal Game of Ur</h2>
              <p><a href='http://royalgameofur.site'>royalgameofur.site</a></p>
              <p>An implementation of the Royal Game of Ur based on: https://www.youtube.com/watch?v=WZskjLq040I</p>
              <p>https://github.com/ayroblu/royal-game-of-ur</p>
            </div>
            <div>
              <h2>Ayro Site</h2>
              <p><a href='https://ayro.nz'>ayro.nz</a></p>
              <p>Contact page: for business enquiries</p>
            </div>
            <div>
              <h2>Archery Calculator</h2>
              <p>archery.ayro.nz</p>
              <p>JS Testing: Jest + equation solving</p>
            </div>
            <div>
              <h2>My First Site</h2>
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
