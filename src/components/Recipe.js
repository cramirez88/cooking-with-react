import React from 'react'

export default function Recipe(props) {
  const {name, time, servings, instructions, ingredients}= props
  return (
    <div className='recipe'>
      <div className='header'>
        <h2 className='title-font'>{name}</h2>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div className='body body-font'>
        <p>Cook Time: {time}</p>
        <p>Servings: {servings}</p>
      </div>
      <p>Instructions:</p>
      <ol>
      <li>{instructions.one}</li>
      <li>{instructions.two}</li>
      <li>{instructions.three}</li>
      </ol>
      <h2>Instructions</h2>
      <div className='footer'>
        <div className='footer-items'>
        <p>{ingredients.name}</p>
        <span>{ingredients.qty}</span>
        </div>
        <div className='footer-items'>
        <p>{ingredients.seasoning}</p>
        <span>{ingredients.amount}</span>
        </div>
      
      </div>
    </div>
   
  )
}
