import { Link } from "react-router-dom"
import "../src/Navigation.css";



const NavigationPage = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}>MuiDemo</Link>
                    <Link to={"/datepicker"}>DatePicker</Link>
                    <Link to={"/reducer-demo"}>ReducerDemo</Link>
                    <Link to={"/reducer-example"}>ReducerExample</Link>
                    <Link to={"/todo"}>Todo</Link>
                    <Link to={"/todo-copy"}>TodoCopy</Link>
                    <Link to={"/student"}>student</Link>
                    <Link to={"/useref"}>UseRefDemo</Link>





                </li>
                
            </ul>
        </div>
    )
}

export default NavigationPage
