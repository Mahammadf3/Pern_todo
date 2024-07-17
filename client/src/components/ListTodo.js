import React, { useState } from 'react';
import axios from 'axios';

function ListTodo({ todos, setTodos, handleDeleteTodo }) {
    const [isEditing, setIsEditing] = useState(null);
    const [editDescription, setEditDescription] = useState("");

    const handleEditClick = (todo) => {
        setIsEditing(todo.id);
        setEditDescription(todo.description);
    };

    const handleUpdate = async (id) => {
       
        const url = `http://localhost:3001/add/${id}`;
        try {
            await axios.put(url, { description: editDescription });
            setTodos(todos.map(todo => (todo.id === id ? { ...todo, description: editDescription } : todo)));
            setIsEditing(null);
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <table className="w-2/3 border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Description</th>
                        <th className="border border-gray-300 px-4 py-2">Edit</th>
                        <th className="border border-gray-300 px-4 py-2">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td className="border border-gray-300" style={{ width: '400px' }}>
                                {isEditing === todo.id ? (
                                    <input
                                        type="text"
                                        value={editDescription}
                                        onChange={(e) => setEditDescription(e.target.value)}
                                        className=" border-none border-gray-300"
                                    />
                                ) : (
                                    todo.description
                                )}
                            </td>
                            <td className="border border-gray-300 px-4 py-2" style={{ width: '200px' }}>
                                {isEditing === todo.id ? (
                                    <button
                                        className="bg-blue-500 text-white rounded-sm px-2"
                                        onClick={() => handleUpdate(todo.id)}
                                    >
                                        Update
                                    </button>
                                ) : (
                                    <button
                                        className="bg-yellow-500 text-white rounded-sm px-2"
                                        onClick={() => handleEditClick(todo)}
                                    >
                                        Edit
                                    </button>
                                )}
                            </td>
                            <td className="border border-gray-300 px-4 py-2" style={{ width: '200px' }}>
                                <button
                                    className="bg-rose-600 text-white rounded-sm px-2"
                                    onClick={() => handleDeleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListTodo;
