import React from 'react'
import loading from './loading.gif';

const Loading=({text})=>{
  return(
    <div className="loading">
      <h1>{text}</h1>
    </div>
  )
}

export default Loading;