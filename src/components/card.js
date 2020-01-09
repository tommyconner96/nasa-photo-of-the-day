import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
      <p>{props.explain}</p>
      <img src={props.imgUrl} alt='a soace picture from nasa'></img>

    </div>
  )
}

export default Card