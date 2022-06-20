import React from 'react'
import Recipe from './Recipe'


export default function RecipeList(props) {
  const {recipe, handleAddRecipe, handleDelete} = props
  return (
    <div>
      {
        recipe.map((recipe, index) => (
          <Recipe key={index} {...recipe} handleDelete={handleDelete}></Recipe>
        ))
      }
     <button className='add-recipe' onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  )
}
