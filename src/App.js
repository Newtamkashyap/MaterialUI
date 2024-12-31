
import './App.css';
import { MuiDemo } from './MuiDemo';
import DatePickerDemo from './DatePickerDemo';
import ReducerDemo from './ReducerDemo';
import { ReducerExample } from './ReducerExample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationPage from './NavigationPage';
import { Todo } from './Todo';
import TodoCopy from '../src/TodoCopy';
import Student from './Student';
import UseRefDemo from './UseRefDemo';


function App() {
  return (
    <div>
      

      <BrowserRouter>
        <NavigationPage />

        <Routes>
          <Route path='/' element={<MuiDemo />} />
          <Route path='datepicker' element={<DatePickerDemo />} />
          <Route path='reducer-demo' element={<ReducerDemo  />} />
          <Route path='reducer-example' element={<ReducerExample />} />
          <Route path='todo' element={<Todo />} />
          <Route path='todo-copy' element={<TodoCopy />} />
          <Route path='student' element={<Student/>} />
          <Route path='useref' element={<UseRefDemo/>} />




          <Route path='*' element={"Not Found"} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
