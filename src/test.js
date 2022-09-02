import { Component } from "react";
import {v4 as uuidv4} from 'uuid'; 
import './test.css'
import './NewTodoForm.css'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.toDo = this.toDo.bind(this);
        this.editor = this.editor.bind(this);
        this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
    }

    toDo(todo){
        this.setState(currState => ({
            todos : [...currState.todos, todo]
        }))
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    editor(id, updateTask){
        const updateTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, todo: updateTask}
            }
            return todo;
        })
        this.setState({todos: updateTodos})
    }

    remover(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }



    render(){
        const todoMapping = this.state.todos.map(doThat => (
             <TodoItems 
             key={doThat.id}
             doThis={this.capitalizeFirstLetter(doThat.todo)}
             todoID={doThat.id}
             removeToDo={() => this.remover(doThat.id)}
             toDoEdit={this.editor}
             />
        ))
        return(
            <div className="todo-container">
               <div className="todo-pseudo-container">
               <div className="top-header">
                <h1>Todo List!</h1>
                    <p>A simple thought of doing something is not enough! Create a Todo list instead then do it!!</p>
               </div>
                {this.state.todos < 1 ? <h2>No Tasks yet! Add one!</h2> : todoMapping}
                <TodoForm addToDo={this.toDo}/>
               </div>
            </div>
        )
    }
}




class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    

    handleSubmit(e){
        e.preventDefault();
        const newDoItem = { ...this.state, id: uuidv4() }
        this.props.addToDo(newDoItem);
        this.setState({todo: ''})
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render(){
        return(
            <form className='todo-submitter' onSubmit={this.handleSubmit}>

                    <label htmlFor="todo">Add a Todo:</label>
                    <input 
                    id="todo" 
                    name='todo' 
                    value={this.state.todo}
                    placeholder="What to do?!?!"
                    onChange = {this.handleChange}
                    />

                    <button className="btn btn-sm btn-success ms-1">Include</button>
              </form>
        )
    }
}


export default TodoList;