import React from 'react'
import RecipeIngredientsEdit from './RecipeIngredientsEdit'

export default function RecipeEdit() {
  return (
    <div className='edit-recipe'>
      <div>
        <label>Name: </label>
        <input type='text'></input>
      </div>
      <div>
        <label>Cook Time: </label>
        <input type='text'></input>
      </div>
      <div>
        <label>Servings: </label>
        <input type='text'></input>
      </div>
      <div>
        <label>Instructions: </label>
        <input type='text'></input>
      </div>
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
