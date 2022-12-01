import React, { Component } from 'react'
import FCRecipes from './FCRecipes'
import dishesArr from './DishRecipe'
import RecipesDone from './RecipesDone'
import Recipe from './Recipe'

export default class MyKitchen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: dishesArr.map((dish) => {
                return (<Recipe class='btn btn-outline-primary' btnTxt='Prepare Dish' name={dish.name} imgUrl={dish.imgUrl} desc={dish.desc} getDish={this.getDish} />)
            }),
            dishesReady: [],
            count: 0
        }
    }
    getDish = (dishName) => {
        let dish = dishesArr.find((dish) => {
            return dish.name === dishName
        })
        let dishC = (
            <Recipe class='btn btn-outline-danger' btnTxt='Eat!' name={dish.name} imgUrl={dish.imgUrl} desc={dish.desc} getDish={this.removeDish} />
        )
        this.setState({
            dishesReady: [...this.state.dishesReady, dishC],
            // how to add the dish with prevState            
            dishes: this.state.dishes.filter((dish) => {
                return dish.props.name !== dishName
            }),
            count: this.state.count + 1,
        })
    }
    removeDish = (dishName) => {
        let dish = dishesArr.find((dish) => {
            return dish.name === dishName
        })
        let dishC = (
            <Recipe class="btn btn-outline-primary" btnTxt='Prepare Dish' name={dish.name} imgUrl={dish.imgUrl} desc={dish.desc} getDish={this.getDish} />
        )
        this.setState({
            dishes: [...this.state.dishes, dishC],
            dishesReady: this.state.dishesReady.filter((dish) => {
                return dish.props.name !== dishName
            }),
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <div className='container'>
                <h1>My Kitchen</h1>
                <FCRecipes dishesArr={this.state.dishes} />
                <RecipesDone isDisplay={this.state.count > 0 ? 'block' : 'none'} counter={this.state.count} dishesArr={this.state.dishesReady} />
            </div>
        )
    }
}