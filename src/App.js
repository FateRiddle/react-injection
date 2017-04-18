import React from 'react'
import checkUrl from './image/check.png'
import './css/index.css'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <span className='Span'>Hello World from React</span>
        <img src={checkUrl} alt=""/>
        <a href="/page1.html">page1</a>
      </div>
    )
  }
}

export default App
