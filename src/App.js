import React, { Component } from 'react'
import * as MathJax from 'react-mathjax-updated'
import GoMarkGithub from 'react-icons/lib/go/mark-github'
import 'devicon/devicon-colors.css'

import TitleLink from './TitleLink'
import MediumArticles from './MediumArticles'
import Software from './Software'
import Logo from './Logo'
import DrawerLayout from './DrawerLayout'
import {cn} from './utils'
import vortVid from './video/full6svort.mp4'
import flapVid from './video/convRender.mp4'
import firstWebVid from './video/ben-l.mp4'
import taniwha from './img/taniwhamarketingrender4.jpg'
import finVel from './img/finfluidvelocity.png'
import subDrag from './img/simplesubproper.png'
import aklbuses from './img/aklbuses-cropped.png'
import videoDelay from './img/video-delay.jpg'
import geotherm from './img/geotherm-steam-field.png'
import uw from './img/uni-washington.jpg'
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
    const videos = this.videos = Array.from(document.querySelectorAll('video'))
    if (!videos.length || !videos[0].paused){
      return
    }
    const startVideos = ()=>{
      videos.map(v=>v.play())
      this.forceUpdate()
      window.removeEventListener('click', startVideos)
    }
    window.addEventListener('click', startVideos)
    this.forceUpdate()
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
    const isPaused = this.videos && !!this.videos.length && this.videos[0].paused
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
              Hi, I'm a tinkerer and developer, I take an interest in a lot of different fields, these are some of the more technical things. Checkout my github for a full list of projects.
            </p><a className='no-color' href='https://github.com/ayroblu'><GoMarkGithub size={50} /></a>
          </div>
          {false &&
          <div id='software'>
            <h2 className='SectionTitle'>
              Software Skills
            </h2>
            <Software />
          </div>}
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
                    <img src='https://coveralls.io/repos/github/ayroblu/object-type-check/badge.svg?branch=master' alt='object type check coverage'/>
                  </a>
                  <p>This is a runtime type checker, I wrote this for verifying serialised data, has 100% test coverage</p>
                  <a className='source-link no-color' href='https://github.com/ayroblu/object-type-check'><GoMarkGithub size={30} /><span>Source</span></a>

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
                  <a className='source-link no-color' href='https://github.com/ayroblu/react-native-redux-log-monitor'><GoMarkGithub size={30} /><span>Source</span></a>
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
                  <a className='source-link no-color' href='https://github.com/ayroblu/db-difftool'><GoMarkGithub size={30} /><span>Source</span></a>
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
                  <a className='source-link no-color' href='https://github.com/ayroblu/redux-add'><GoMarkGithub size={30} /><span>Source</span></a>
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
              <p>Shows the locations of Auckland buses in real time to the nearest 30 seconds because Auckland Transport don't provide a simple interface for seeing this kind of information</p>
              <div>
                <img src={aklbuses} alt='Live Auckland Buses'/>
              </div>
              <a className='source-link no-color' href='https://github.com/ayroblu/aklbuses.nz'><GoMarkGithub size={30} /><span>Source</span></a>
            </div>
            <div>
              <TitleLink><a href='https://webrec.ayro.nz'>Video Delay</a></TitleLink>
              <p>Chrome has decent video options for recording and playing videos, and makes it easy to create a flexible video playback system - created for coaching at the Auckland Archery Club</p>
              <p>Uses electron for packaging an offline, desktop cross platform app</p>
              <div className='captionedImage'>
                <img src={videoDelay} alt='Archery Video Delay'/>
                <span className='caption'>
                  Cameras from multiple angles with a light panel for the archer to check their form post shot
                </span>
              </div>
              <a className='source-link no-color' href='https://github.com/ayroblu/video-delay'><GoMarkGithub size={30} /><span>Source</span></a>
            </div>
          </div>
          <div id='react-native' className="App-text">
            <h2 className='SectionTitle'>React Native</h2>
            <div>
              <h3>Archery Notes</h3>
              <p>Designed to be consistent with Android and iOS</p>
              <p>Is a basic showcase of some of the basic skills associated with React Native development. This includes adding React Native Navigation and Realm, and various Jest testing, it probably could be improved to showcase some of the more advanced skills but feel free to discuss these with me</p>
              <div>
                <a className='source-link no-color' href='https://github.com/ayroblu/ArcheryNotes'><GoMarkGithub size={30} /><span>Source</span></a>
              </div>
            </div>
          </div>
          <div id='android' className="App-text">
            <h2 className='SectionTitle'>Old Android Projects (2013)</h2>
            <div>
              <h3>Archery Scorer</h3>
              <p>An app I wrote for calculating my archery scores in 2013</p>
              <a href='https://play.google.com/store/apps/details?id=benl.student.archeryscorer'>
                <img src={gplayLogo} className='GoogleLink' alt='Archery Scorer Link' />
              </a>
              <a className='source-link no-color' href='https://github.com/ayroblu/ArcherScorer'><GoMarkGithub size={30} /><span>Source</span></a>
            </div>
            <div>
              <h3>NZ Weather and Traffic</h3>
              <p>An app I wrote for checking the weather and traffic because it was too frustrating to use publicly provided weather and traffic cameras on my phone</p>
              <a href='https://play.google.com/store/apps/details?id=benl.student.datacol&hl=en'>
                <img src={gplayLogo} className='GoogleLink' alt='NZ Weather and Traffic Link' />
              </a>
              <a className='source-link no-color' href='https://github.com/ayroblu/nzWeatherTraffic'><GoMarkGithub size={30} /><span>Source</span></a>
            </div>
          </div>
          <div id='other-projects'>
            <h2 className='SectionTitle'>Other Projects</h2>
            <div className="App-text">
              <TitleLink><a href='http://royalgameofur.site'>Royal Game of Ur</a></TitleLink>
              <p>Based on this fantastic video, where the basic rules are explained</p>
            </div>
            <div className='video-parent-container'>
              <div className='video-container'>
                <iframe width="560" height="315"
                  title='Royal Game of Ur'
                  src="https://www.youtube.com/embed/WZskjLq040I"
                  frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
            <div className="App-text">
              <a className='source-link no-color' href='https://github.com/ayroblu/royal-game-of-ur'><GoMarkGithub size={30} /><span>Source</span></a>
            </div>
            <div className='App-text'>
              <TitleLink><a href='https://ayro.nz'>Ayro Site</a></TitleLink>
              <p>Just a basic contact page, features this icon: </p>
              <div className='App-logo'>
                <Logo style={{height: '200px'}} />
              </div>
              <a className='source-link no-color' href='https://github.com/ayroblu/ayro.nz'><GoMarkGithub size={30} /><span>Source</span></a>
            </div>
            <div className='App-text'>
              <TitleLink><a href='https://archery.ayro.nz'>Archery Calculator</a></TitleLink>
              <p>This is just a simple website I've created for calculating sight marks using projective motion equations, note the math is further below. With two sight marks, you can work out all other sight marks. It uses a basic bisection method for equation solving</p>
              <a className='source-link no-color' href='https://github.com/ayroblu/archery-toolbox'><GoMarkGithub size={30} /><span>Source</span></a>
            </div>
            <div>
              <TitleLink><a href='http://ben-l.com'>My First Site</a></TitleLink>
              <p>This is my first ever website, hosted on google apps, with python, and has a pretty nice transition which was built to be compatible (limited) with ie6</p>
              <div className='captionedImage'>
                {isPaused &&
                <div className='tapper'>Tap here</div>}
                <video muted autoPlay type="video/mp4" loop>
                  <source src={firstWebVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <span className='caption'>
                  My First Website, animating through auto typing out text based on "Chuck" tv show, note how the cursor does not start from the center
                </span>
              </div>
              <a className='source-link no-color' href='https://github.com/ayroblu/personal-website-first'><GoMarkGithub size={30} /><span>Source</span></a>
            </div>
          </div>
          <div id='university'>
            <h2 className='SectionTitle'>University</h2>
            <div>
              <h3>University of Auckland - Bachelor of Commerce</h3>
              <p>Major in Economics, including international trade, how environmental factors affect how countries struggle or thrive in different conditions.</p>
              <p>Various topics in finance, including Black–Scholes, put call parity, Discounted Cash Flows and analyzing corporate finances</p>
              <p>Various topics in entrepreneurship, including Venture Capital, Cap tables, IPOs and valuations</p>
            </div>
            <div className="App-text">
              <h3>University of Auckland - Bachelor of Engineering (Honours)</h3>
              <p>This degree covered many different mathematical and modelling topics including Operations Research, Fluid Dynamics, Geothermal Engineering and Software Development</p>
              <p>Below are some pictures from a Geothermal course and from my Honours project</p>
            </div>
            <div className='App-videos'>
              <div className='captionedImage'>
                <img className='FullSize' src={geotherm} alt='Production data for example geothermal field' />
                <span className='caption'>
                  The calculated production output from a model Geothermal field
                </span>
              </div>
              <div className='uniImages'>
                <div>
                  <img src={taniwha} alt='taniwha' className='taniwhaImage' />
                </div>
                <div>
                  <img src={finVel} alt='fin velocity' className='finVelocityImage' />
                </div>
                <div>
                  <img src={subDrag} alt='Sub drag' className='subDragImage' />
                </div>
              </div>
              <div className='relative'>
                <video autoPlay type="video/mp4" loop muted>
                  <source src={vortVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {isPaused &&
                <div className='tapper'>Tap here</div>}
              </div>
              <div className='relative'>
                <video autoPlay type="video/mp4" loop muted>
                  <source src={flapVid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {isPaused &&
                <div className='tapper'>Tap here</div>}
              </div>
            </div>
            <div className="App-text">
              <h3>University of Washington - Exchange</h3>
            </div>
            <div>
              <img src={uw} alt='University of Washington Quad' className='FullSize' />
            </div>
          </div>
          <div id='archery'>
            <h2 className='SectionTitle'>Archery</h2>
            <div className='App-text'>
              <p>Photos of all 3 bows</p>
              <h3>Projectile Motion equations</h3>
              <p>These are just some basic projectile motion equations which allow you to solve for arrow positioning</p>
            </div>
            <MathJax.Context>
              <div className='mathjax-node-parent App-scroll App-text'>
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
          {false &&
          <div>
            <h2>Palette</h2>
            <div style={{backgroundColor: theme.gold, width: 50, height: 50, margin: 'auto'}} />
            <div style={{backgroundColor: theme.orange, width: 50, height: 50, margin: 'auto'}} />
            <div style={{backgroundColor: theme.red, width: 50, height: 50, margin: 'auto'}} />
            <div style={{backgroundColor: theme.purple, width: 50, height: 50, margin: 'auto'}} />
            <div style={{backgroundColor: theme.grey, width: 50, height: 50, margin: 'auto'}} />
          </div>}
        </div>
      </div>
    )
  }
}

export default App
