import React, {Component} from 'react'
import * as MathJax from 'react-mathjax-updated'
//import PropTypes from 'prop-types'

import CIcon from 'devicon/icons/c/c-original.svg'
import CppIcon from 'devicon/icons/cplusplus/cplusplus-original.svg'
import AndroidIcon from 'devicon/icons/android/android-original-wordmark.svg'
import ReactIcon from 'devicon/icons/react/react-original-wordmark.svg'
import RubyIcon from 'devicon/icons/ruby/ruby-original-wordmark.svg'
import RailsIcon from 'devicon/icons/rails/rails-original-wordmark.svg'
import JavaIcon from 'devicon/icons/java/java-original-wordmark.svg'
import JavaScriptIcon from 'devicon/icons/javascript/javascript-original.svg'

import Language from './Language'
import './Software.css'

class Software extends Component {
  static propTypes = {
  }
  render() {
    return (
      <div className='Software'>
        <Language
          title={
            <div><img src={JavaScriptIcon} className='TitleLogo' alt='javasript' /></div>
          }
          description={
            'JavaScript is my primary language where I make beautiful things'
          }
        >
          <div><img src={ReactIcon} className='Logo' alt='react' /></div>
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
          title={
            <div><img src={CIcon} className='TitleLogo' alt='C' /><img src={CppIcon} className='TitleLogo' alt='C++' /></div>
          }
        >
          <div>(look at Endace framework)</div>
        </Language>
        <Language
          title={
            <div>Python</div>
          }
        >
          <div>Django</div>
          <div>numpy</div>
          <div>OpenCV</div>
        </Language>
        <Language
          title={
            <div>PHP</div>
          }
        >
          <div>Yii</div>
          <div>Symfony</div>
        </Language>
        <Language
          title={
            <div>C#</div>
          }
        >
          <div>Visual Basic</div>
          <div>ASP.NET MVC</div>
          <div>LINQ</div>
          <div>Razor</div>
          <div>NuGet</div>
        </Language>
        <Language
          title={
            <div>SQL</div>
          }
        >
          <div>PostgreSQL</div>
          <div>MySQL</div>
          <div>SQL Server</div>
        </Language>
        <Language
          title={
            <MathJax.Context>
              <div className='mathjax-node-parent'>
                <MathJax.Node>{'\\LaTeX'}</MathJax.Node>
              </div>
            </MathJax.Context>
          }
        >
          <div>Reports</div>
        </Language>
        <Language
          title={
            <div><img src={RubyIcon} className='TitleLogo' alt='ruby' /></div>
          }
        >
          <div><img src={RailsIcon} className='TitleLogo' alt='rails' /></div>
          <div>JSON API</div>
          <div>Geolocation</div>
          <div>Active Record</div>
          <div>Common web pages and generators</div>
        </Language>
        <Language
          title={
            <div><img src={JavaIcon} className='TitleLogo' alt='java' /></div>
          }
        >
          <div>Swing</div>
          <div>Spring</div>
          <div>Hibernate</div>
          <div>Kotlin</div>
          <div>Android <img src={AndroidIcon} className='TitleLogo' alt='logo' /></div>
          <div>Stars: 3</div>
        </Language>
      </div>
    )
  }
}

export default Software
