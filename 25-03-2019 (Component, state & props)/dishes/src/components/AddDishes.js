import React, {Component} from 'react';

class AddDishes extends Component {

    state = {
        dish: {}
    }

    handleOnChange=(event)=>{
        console.log('a');
        let newDish={};
        newDish[event.target.name] = event.target.value;
    
     this.setState({
         dish:{
             ...this.state.dish,
             ...newDish
         }
     })
    }

  

    render(){
        return(
            <div>
                <form className = "form_add_dish"
                    onSubmit={(event)=>this.props.handleAddDish(event,this.state.dish)}>

                    <label>Name</label>
                    <input type = "text" 
                        onBlur={this.handleOnChange} 
                        value={this.state.dish.name}  
                        name="name"/>

                    <label>Description</label>
                    <input type = "text" 
                        onChange={this.handleOnChange} 
                        value={this.state.dish.description}  
                        name="description"
                        />
                    
                    <label>Price</label>
                    <input type = "number" 
                        onChange={this.handleOnChange} 
                        value={this.state.dish.price}  
                        name="price"/>

                    <label>Status</label>
                    <input type = "text" 
                        onChange={this.handleOnChange} 
                        value={this.state.dish.status}  
                        name="status"/>

                    <button type = "submit">Add Dish    </button>
                </form>
            </div>
        );
    }
}

export default AddDishes;
























































// import React, {Component} from 'react';

// class InputDishes extends Component {

//     constructor(props){
//         super(props);
//         this.state = { name: '', age: '' };
//       }

//     handleSubmit = event => {
//       event.preventDefault();
//       alert('Your name is: ' + this.input.value);
//     };


//     onSubmit = event => {
//         event.preventDefault();
//         const name = this.name.value;
//         const age = this.age.value;
//         const info = {name: name, age: age};
//         const data = this.state.data;
//         data.push(info);
//         this.setState({
//         data: data
//         });
//    };
   
//     render() {
//       return (

//           <React.Fragment>
//                 <form className="form-inline" onSubmit={this.onSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Name"
//                         ref={input => this.name = input}/>
//                     <div>
//                         <input
//                             type="text"
//                             placeholder="Age"
//                             ref={input => this.age = input}/>
//                     </div> 

//                     <button type="submit"> Save </button>
//                 </form>

//                 <h3>Your username is: {this.state.name} | Age is: {this.state.age} </h3>
//           </React.Fragment>
        
//       );
//     }
//    }

// export default InputDishes;