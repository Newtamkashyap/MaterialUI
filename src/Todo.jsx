import { useState } from "react";
import { Formik, formik, useFormik } from "formik";



export function Todo() {
    const [formInitial, setFormInitial] = useState(
        {
            id: '',
            title: '',
            complete: false,

        }
    )

    const formiks = useFormik({
        initialValues: formInitial
        ,

        onSubmit: (detail) => {
            console.log("calling onsubmit inbuilt function", detail)

            if (detail.id) {
                const updateDetail = formInitial.map((initial) => {
                    if (initial.id === detail.id) {
                        return { id: detail.id, title: detail.title, complete: detail.complete };
                    }
                    return formInitial;
                });
                setFormInitial(updateDetail);
            } else {
                setFormInitial([...formInitial, { id: formInitial.length + 1, title: detail.title, complete: detail.complete }]);
            }
            formiks.resetForm();
            // setTodoList([...todoList, detail])
        }


    })


    const [todoList, setTodoList] = useState([{
        id: 1,
        title: 'Todo Example',
        complete: 'true',


    }
        ,
    {
        id: 2,
        title: 'Todo 2 Example',
        complete: 'false',

    }


    ]);

    function handleSubmit(event) {
        event.preventDefault()
        console.log("calling hanldesubmit function", event)
        let obj = {
            id: event.target.id.value,
            title: event.target.title.value,
            complete: event.target.complete.value,

        }

        // obj.id=200
        // obj.id = 
        // obj.title = ;
        // obj.complete = event.target.complete.value;



        setTodoList([...todoList, obj]);



    }

    function handleDelete(id) {
        console.log("calling handleDelete for Id = ", id)
        let del = todoList.filter((todo) => {
            return todo.id !== id;
        })

        setTodoList(del);


    }

    function handleEdit(todoObj) {
        console.log("calling handleEdit", todoObj.id)
        alert("hanldeEdit" + JSON.stringify(todoObj))
        formiks.setValues({ id: todoObj.id, title: todoObj.title, complete: todoObj.complete });

        // formiks.setValues(todoObj);
        // formiks.setFieldValue('id',todoObj.id);


        setFormInitial(todoObj)



    }
    return (
        <div>
            <h4>Todo</h4>
            {
                todoList.map((todo, index) => (
                    <div key={index}>
                        <li>{todo.id}{todo.title}{todo.complete}</li>
                        <button onClick={()=>handleDelete(todo)}>Delete</button>
                        <button onClick={()=>handleEdit(todo)}>Edit</button>


                    </div>

                ))}




            <form onSubmit={formiks.handleSubmit}>
                <input type="text" name='id' id='id' onChange={formiks.handleChange} />
                <input type="text" name='title' id='title' onChange={formiks.handleChange} />
                <input type="text" name='complete' id='complete' onChange={formiks.handleChange} /><br />
                <button type='submit' >submit</button>

            </form>


            {/* <button onClick={(id) => { handleDelete(todoList[0].id) }} >Delete</button> */}

            {/* <button onClick={(id) => { handleDelete(2) }} >Delete</button> */}

            {/* <button onClick={handleEdit} >Edit</button> */}






        </div>
    )
}