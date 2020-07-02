import React from 'react';
import './App.css';

//shopping list app

//state
interface AppState{
  items: Array<ShoppingItem>;
}

//class

//newItem = new ShoppingItem();
const pizza: ShoppingItem = {
      name : "Pizza",
      price: 4.5,
      description: "A large pizza"
  }

const steak: ShoppingItem = {
    name: "steak",
    price: 10.5,
    description: "Ribeye steak"
}                                     

const snack_bar: ShoppingItem = {
  name: "Snack bar",
  price: 3,
  description: "granola bar"
}

const pears: ShoppingItem = {
  name: "pears",
  price: 2.5,
  description: "organic Maryland pears"
}


class ShoppingItem{
    public name = "";
    public price = 0.0;
    public description = "";
}


class App extends React.Component<{}, AppState> {
  constructor(props: any, state: ShoppingItem){
    super(props, state);
       this.state = {items: [pizza, steak, snack_bar, pears]};
  }
  
   public render(){
      return (
    <div className="App">
      <header className="App-header">
        Shopping list
      </header>
        <div className="list-background"> 
          <p> These are the items</p>
          <div className = "list">
                  <ol>
                    <div className="margin">
                      {this.state.items.map(item => (
                        <div className="margin">
                        <li key={item.name}>{item.name} {item.price} 
                          <dt key={item.description}> {item.description}</dt>
                        </li>
                        </div>
                      ))}
                      </div>
                  </ol>
                </div>
              <form onSubmit = {this.submitForm}>
                  <input type="text" placeholder="Enter Name" onChange={this.changeInputName } />
              </form>
          <form onSubmit = {this.submitForm}>
              <input type="text" placeholder="Enter Price" onChange={this.changeInputPrice} />
          </form>
      <form onSubmit = {this.submitForm}>
        <input type="text" placeholder="Enter description" onChange={this.changeInputDescription}/>
      </form>
    </div>
    </div>
  );
}


public InputPrice = "";
public InputName = "";
public InputDescription = "";

    private changeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.InputName = event.target.value;//event is set by react and is the new text in box
    };

    private changeInputPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.InputPrice = event.target.value;//event is set by react and is the new text in box
    };

    private changeInputDescription = (event: React.ChangeEvent<HTMLInputElement>) =>{
      this.InputDescription = event.target.value;
    }
    private submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("name: " + this.InputName + "\nPrice: " + this.InputPrice + "Description: " + this.InputDescription);
            const newItem: ShoppingItem = { 
              name: this.InputName, 
              price: parseFloat(this.InputPrice), 
              description: this.InputDescription
            }
                this.setState({
                    items: this.state.items.concat(newItem)
                });
    }
        
}


export default App;

