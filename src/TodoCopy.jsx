
import { useFormik } from 'formik';
import React, { useState } from 'react';

const TodoCopy = () => {
    const [todoLists, setTodoLists] = useState([
        {
            id: 1,
            title: 'Dancing',
            complete:"false",
        },
        {
            id: 2,
            title: 'Walking',
            complete:"true",

        },



    ]);

    const formik = useFormik({
        initialValues: {
            id: '',
            title: '',
            complete:'',
        },

        onSubmit: (detail) => {
            console.log("onSubmit", detail);

            if (detail.id) {
                const updatedDetail = todoLists.map((todoList) => {
                    if (todoList.id === detail.id) {
                        return { id: detail.id, title: detail.title ,  complete: detail.complete };
                    }
                    return todoList;
                });
                setTodoLists(updatedDetail);
            } else {
                setTodoLists([...todoLists, { id: todoLists.length + 1, title: detail.title ,complete: detail.complete}]);
            }
            formik.resetForm();
        }
    });     


    function handleDelete(todoObj) {
        console.log("calling delete function", todoObj.id);
        setTodoLists(todoLists.filter((todoList) => todoList.id !== todoObj.id));
    }
    function handleEdit(todoObj) {
        console.log("calling handleedit", todoObj.id);
        formik.setValues({ id: todoObj.id, title:todoObj.title,complete:todoObj.complete });
    }

    return (
        <div>
            <h1>Todo Copy</h1>
            <ul>
                {todoLists.map((todo, index) => (
                    <div key={index}>
                        <li>{todo.id} {todo.title} {todo.complete}</li>
                        <button onClick={() => handleDelete(todo)}>Delt</button>
                        <button onClick={() => handleEdit(todo)}>Edit</button>
                    </div>
                ))}
            </ul>

            <form onSubmit={formik.handleSubmit}>
                <input type="text" name='id' onChange={formik.handleChange} value={formik.values.id} />
                <input type="text" name='title' onChange={formik.handleChange} value={formik.values.title} />
                <input type="text" name='complete' onChange={formik.handleChange} value={formik.values.complete} />

                <button type="submit">Add </button>
            </form>
        </div>
    );
};

export default TodoCopy;