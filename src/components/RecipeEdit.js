import React from 'react'
import RecipeIngredientsEdit from './RecipeIngredientsEdit'

export default function RecipeEdit() {
  return (
    <div className='edit-recipe'>
      <div className='btn-wrapper'>
        <button className='exit-btn'>&times;</button>
      </div>
      <form className='recipe-form'>
      <div className='form-input'>
        <label>Name: </label>
        <input type='text'></input>
      </div>
      <div className='form-input'>
        <label>Cook Time: </label>
        <input type='text'></input>
      </div>
      <div className='form-input'>
        <label>Servings: </label>
        <input type='text'></input>
      </div>
      <div className='form-input'>
        <label>Instructions: </label>
        <textarea></textarea>
      </div>
      </form>

      <br/>
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <RecipeIngredientsEdit/>
        <RecipeIngredientsEdit/>
      </div>
      <button>Add Ingredient</button>
    </div>
    
  )
}
