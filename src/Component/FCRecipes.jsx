import React from 'react'

export default function FCRecipes(props) {
    return (
        <div className='row'>
            <h2>Recipes:</h2>
            {props.dishesArr}
        </div>
    )
}
