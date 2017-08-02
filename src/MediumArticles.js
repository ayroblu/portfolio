import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './MediumArticles.css'

class Article extends Component {
  static propTypes = {
    title: PropTypes.node.isRequired
  , titleLink: PropTypes.string.isRequired
  , description: PropTypes.node
  , date: PropTypes.string
  }
  render(){
    const {title, titleLink, description, source, date} = this.props
    return (
      <article className='Article'>
        <a href={titleLink}>
          <h3>{title}</h3>
        </a>
        <p className='Article-date'>Date Written: {date}</p>
        <p className='Article-description'>{description}</p>
        <p className='Article-github'>{source}</p>
      </article>
    )
  }
}
class MediumArticles extends Component {
  static propTypes = {
  }
  render() {
    return (
      <div className='MediumArticles'>
        <Article
          title='CSS Animation Fill Mode'
          titleLink='https://medium.com/@benlu/css-animation-fill-mode-7f39417f56ad'
          description='A brief explanation of the css animation fill mode with an emphasis on backward'
          date='2017-06-05'
        />
        <Article
          title='SSR with Create React App v2'
          titleLink='https://medium.com/@benlu/ssr-with-create-react-app-v2-1b8b520681d9'
          description='Updated explanation of how to do SSR with Create React App, basic concepts, and an update with React Router v4'
          source='https://github.com/ayroblu/ssr-create-react-app-v2'
          date='2017-04-05'
        />
        <Article
          title='Server Side Rendering with Create React App'
          titleLink='https://hackernoon.com/server-side-rendering-with-create-react-app-1faf5a9d1eff'
          description='Explanation of how to do SSR with Create React App, basic concepts'
          source='https://github.com/ayroblu/ssr-create-react-app'
          date='2017-04-05'
        />
      </div>
    )
  }
}

export default MediumArticles
