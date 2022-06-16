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
      },
      ingredients: {
        name: 'Chicken',
        qty: '2 Pounds',
        seasoning: 'Salt',
        amount: '1 tbs'
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
      },
      ingredients: {
        name: 'Pork',
        qty: '3 Pounds',
        seasoning: 'Paprika',
        amount: '2 tbs'
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
