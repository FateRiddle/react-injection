import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import $ from 'jquery'

const root = document.getElementById('root')
ReactDOM.render(<App />,root)

$('.main').click(()=>{
  alert('jquery works')
})
