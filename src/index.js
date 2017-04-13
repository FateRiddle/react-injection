import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import App from './App'

const root = document.getElementById('root')
ReactDOM.render(<App />,root)

$('.main').click(()=>{
  alert('jquery works')
})
