import React from 'react'
import RecipeList from './components/RecipeList';

function App() {
  const sampleRecipes = [
    {
      name: 'Chicken',
      time: '1:45',
      servings: 3,
      instructions: {
        one: 'Put Salt On Chicken',
        two: 'Put Chicken in the oven',
        three: 'Eat Chicken'
      }
    },
    {
      name: 'Pork',
      time: '0:45',
      servings: 5,
      instructions: {
        one: 'Put Paprika on Pork',
        two: 'Put pork in the oven',
        three: 'Eat Pork'
      }
    }
  ]

  return (
    <>
      <RecipeList sampleRecipes={sampleRecipes} />
    </>
  )
  
  
  
  ;
}

export default App;
