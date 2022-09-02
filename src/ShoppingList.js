import { Component } from "react";
import SLForm from './SLForm';
import {v4 as uuidv4} from 'uuid'

class ShoppingList extends Component{
    constructor(props){
        super(props);
        this.state = {
          items: [ ]
        }
        this.addItem = this.addItem.bind(this)
    }

    addItem(item){
        let newItem = {...item, id: uuidv4()}
        this.setState(currState => ({
            items : [...currState.items, newItem]
        }))
    }


    renderItems(){
        return (
            <ul>
                {this.state.items.map(item => (
                    <li key={item.id}>
                      {item.product} = {item.qty} {item.qty > 1 ? 'pieces' : 'piece'}
                    </li>
                ))}
            </ul>
        )
    }

    render(){
        
        return (
            <div>
                <h1>To Shop List:</h1>
                 {this.renderItems()}
                <SLForm addItems={this.addItem}/>
            </div>

        )
    }
    
}

export default ShoppingList;