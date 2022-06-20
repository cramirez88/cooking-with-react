import React, {useEffect, useState} from 'react'
import RecipeList from './components/RecipeList';
import './css/App.css'
import { v4 as uuidv4 } from 'uuid'
import RecipeEdit from './components/RecipeEdit';
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
  const sampleRecipes = [
    {
      id: 1,
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
      id: 2,
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
  const [recipe, setRecipe] = useState(sampleRecipes)

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null)
      setRecipe(JSON.parse(recipeJSON))
    
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipe))
  }, [recipe])

  const handleAddRecipe = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      time: '1:00',
      instructions: {
        one: 'First',
        two: 'Second',
        three: 'Three'
      },
      ingredients: {
        name: 'New',
        qty: 'X amount of Pounds',
        seasoning: 'Pepper',
        amount: 'X amount'
      }
    }
    setRecipe([...recipe, newRecipe])
  }

  const handleDelete = (id) => {
    setRecipe(recipe.filter(recipe => recipe.id !== id))
  }

  return (
    <>
      <RecipeList recipe={recipe} handleAddRecipe={handleAddRecipe} handleDelete={handleDelete} />
      <RecipeEdit/>
    </>
  )
  
  
  
  ;
}

export default App;
