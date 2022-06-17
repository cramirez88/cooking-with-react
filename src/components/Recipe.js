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
      <h2>Instructions:</h2>
      <ol className='list'>
      <li className='list-item'>{instructions.one}</li>
      <li className='list-item'>{instructions.two}</li>
      <li className='list-item'>{instructions.three}</li>
      </ol>
      <h2>Ingredients</h2>
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
