import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputTodo from './inputTodo';
import ListTodo from './ListTodo';

function HandleTodo() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getTodoData = async () => {
        const url = "http://localhost:3001/display";
        try {
            const response = await axios.get(url);
            setTodos(response.data); 
            setLoading(false);
        } catch (error) {
            console.error("Error fetching todos:", error);
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getTodoData();
    }, []);

    const handleAddTodo = async (values, { resetForm }) => {
        const url = "http://localhost:3001/add";
        const description = { description: values.name };
        try {
            await axios.post(url, description);
            resetForm();
            getTodoData(); // Refresh the list after adding a new todo
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    const handleDeleteTodo = async (id) => {
        const url = `http://localhost:3001/add/${id}`;
        try {
            await axios.delete(url);
            getTodoData();
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <InputTodo onAddTodo={handleAddTodo} />
            <ListTodo todos={todos} setTodos={setTodos} handleDeleteTodo={handleDeleteTodo} />
        </div>
    );
}

export default HandleTodo;
