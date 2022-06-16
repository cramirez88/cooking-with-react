import React from 'react'
import Recipe from './Recipe'

export default function RecipeList(props) {
  const {sampleRecipes} = props
  return (
    <div>
      {
        sampleRecipes.map((recipe, index) => (
          <Recipe key={index} {...recipe}></Recipe>
        ))
      }
    </div>
  )
}
