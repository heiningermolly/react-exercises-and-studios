import React from 'react';
import styles from './Ingredients.css';

export default function RecipeIngredients() {
    let ingredients = ["peanut butter", "oats", "chia seeds", "pepitas", "maple syrup"]
  return (
    <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
        </ul>
    </div>
  )
}
