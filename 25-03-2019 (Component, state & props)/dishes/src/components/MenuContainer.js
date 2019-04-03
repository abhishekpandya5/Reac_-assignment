import React, { Component } from 'react';
import menu from './Menu';
import Dishes from './Dishes';
import AddDishes from './AddDishes';

class MenuContainer extends Component {

    state = {
        menu: menu
    };

    handleAddDish=(event,dish)=>{
        event.preventDefault();
        console.log(dish);
       
         let newMenu=this.state.menu;
         newMenu.push(dish);

         this.setState({
             menu: newMenu
         });
    
     }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Menu</h1>
                    {this.state.menu.map( (dish) => {
                        return(<Dishes dish = {dish} />);
                    })}
                </div>
                <h2>Add Dish</h2>
                <AddDishes 
                    // handleOnChange={this.handleOnChange} 
                    handleAddDish={this.handleAddDish}/>
            </React.Fragment>
        );
    }
}

export default MenuContainer;