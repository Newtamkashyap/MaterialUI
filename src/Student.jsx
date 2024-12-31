
import { useFormik } from 'formik';
import React, { useState } from 'react';

const Student = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'James Doe' },
        { id: 4, name: 'Jenny Doe' },


    ]);

     const formik = useFormik({ 
        initialValues: { 
            id: '',
            name: '' 
        },

        onSubmit: (values) => {
            console.log("onSubmit", values);

            if (values.id) {
                const updatedStudents = students.map((student) => {
                    if (student.id === values.id) {
                        return { id: values.id, name: values.name };
                    }
                    return student;
                });
                setStudents(updatedStudents);
            } else {
                setStudents([...students, { id: students.length + 1, name: values.name }]);
            }
            formik.resetForm();
        }
    }); // formik hook  to handle form state    


    function deleteStudent(studentObj) {
        console.log("deleteStudent", studentObj.id);
        setStudents(students.filter((student) => student.id !== studentObj.id));
    }
    function editStudent(studentObj) {
        console.log("editStudent", studentObj.id);
        formik.setValues({ id: studentObj.id, name: studentObj.name });
    }

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map((student, index) => (
                    <div key={index}>
                        <li>{student.name}</li>
                        <button onClick={() => deleteStudent(student)}>Delt</button>
                        <button onClick={() => editStudent(student)}>Edit</button>
                    </div>
                ))}
            </ul>

            <form onSubmit={formik.handleSubmit}>
                <input type="text" name='id' onChange={formik.handleChange} value={formik.values.id} />
                <input type="text" name='name' onChange={formik.handleChange} value={formik.values.name} />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default Student;