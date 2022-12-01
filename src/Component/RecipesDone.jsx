import React from 'react'

export default function RecipesDone(props) {
    return (
        <div style={{ display: props.isDisplay }} className='row mt-4'>
            <h2>Recipes Done: {props.counter}</h2>
            <div className='row mt-4'>
                {props.dishesArr}
            </div>
        </div>
    )
}