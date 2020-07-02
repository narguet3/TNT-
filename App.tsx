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
      price: 4.5
  }

const steak: ShoppingItem = {
    name: "steak",
    price: 10.5
}                                     

const snack_bar: ShoppingItem = {
  name: "Snack bar",
  price: 3
}

const pears: ShoppingItem = {
  name: "pears",
  price: 2.5
}


class ShoppingItem{
    public name = "";
    public price = 0.0;
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
          <p> These are the items</p>
              <ul>
                  {this.state.items.map(item => (
                    <li key={item.name}>{item.name} {item.price}</li>
                  ))}
              </ul>
            <form onSubmit = {this.submitForm}>
                <input type="text" placeholder="Enter Name" onChange={this.changeInputName } />
            </form>
        <form onSubmit = {this.submitForm}>
            <input type="text" placeholder="Enter Price" onChange={this.changeInputPrice} />
        </form>
    </div>
  );
}



public InputPrice = "";
public InputName = "";

    private changeInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.InputName = event.target.value;//event is set by react and is the new text in box
    };

    private changeInputPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.InputPrice = event.target.value;//event is set by react and is the new text in box
    };

    private submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("name: " + this.InputName + "\nPrice: " + this.InputPrice);
            const newItem: ShoppingItem = { 
              name: this.InputName, 
              price: parseFloat(this.InputPrice) 
            }
                this.setState({
                    items: this.state.items.concat(newItem)
                });
    }
        
}


export default App;

