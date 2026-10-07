import React from 'react'
import { useState } from 'react'

const App = () => {useState
  const [counter, setCounter]= useState(0)
  return (
    <div className='main'> 
      <div className='chiled-box'>{counter} </div>
      <div className='btns'>
        <button className='btn' onClick ={function(){
          setCounter(counter+1)
        }}>increase</button>
        <button className='btn' onClick ={function(){
          setCounter(counter-1)
        }}>decrease</button>
        <button className='btn' onClick ={function(){
          setCounter(0)
        }}>reset</button>
        </div>
      </div>
    
  )
}

export default App