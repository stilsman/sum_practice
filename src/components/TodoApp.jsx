import React, { useState } from 'react';
import "./todo.css";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const markComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteAllTodos = () => {
        setTodos([]);
    };

    return (
        <section className="todo__list">
            <div>
                <div className="todo__list__header">
                    <h1 className="todo__list__title">to DO</h1>
                </div>
                <div className="todo__list__content">
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} deleteTodo={deleteTodo} markComplete={markComplete} deleteAllTodos={deleteAllTodos} />
                </div>
            </div>
        </section>
    );
};

export default TodoApp;