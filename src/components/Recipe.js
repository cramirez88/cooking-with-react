import React from 'react'

export default function Recipe(props) {
  const {name, time, servings, instructions}= props
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div>
        <p>Cook Time: {time}</p>
        <p>Servings: {servings}</p>
      </div>
      <p>Instructions:</p>
      <ol>
      <li>{instructions.one}</li>
      <li>{instructions.two}</li>
      <li>{instructions.three}</li>
      </ol>
    </div>
   
  )
}
