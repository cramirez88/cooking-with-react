import React from 'react'
import Recipe from './Recipe'

export default function RecipeList(props) {
  const {recipe, handleAddRecipe} = props
  return (
    <div>
      {
        recipe.map((recipe, index) => (
          <Recipe key={index} {...recipe}></Recipe>
        ))
      }
     <button className='add-recipe' onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  )
}
