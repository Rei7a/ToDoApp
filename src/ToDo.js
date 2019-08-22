import React from 'react';

class ToDo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            name: ''
        };
    }

    handleInputTodo = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleClickAddTodo = () => {
        const {todos,name} = this.state;
        this.setState({
            todos: [...todos, name]
        });
    }

    hadleClickRemoveTodo = (index) => {
        const {todos, name} = this.state;
        this.setState({
            todos: [...todos.slice(0,index),...todos.slice(index + 1)]
        });
    }

    render() {
        const { todos } =this.state;

        return (
            <div>
                <input type="text" onInput = {this.handleInputTodo}/>
                <button onClick={this.handleClickAddTodo}>Push</button>
                <ul>
                    {todos.map((todo,index) => 
                    <li key={index}>
                        {todo}
                        <button onClick={ () => {this.hadleClickRemoveTodo(index)}}>Delete</button>
                    </li>)}
                </ul>
            </div>
        );
    }
}

export default ToDo;