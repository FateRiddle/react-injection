import $ from 'jquery'
import './css/page1.css'
import React from 'react'
import ReactDOM from 'react-dom'

$('.main').click(()=>{
  alert('page1')
})

ReactDOM.render(
  <span>This is another page</span>,
  document.getElementById('root')
)
