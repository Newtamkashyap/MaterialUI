//Debouncing in React is a technique used to limit the execution rate.
//  It prevents excessive function calls for frequent events, like changing the input,
//  and helps improve the performance.

import { useRef, useState } from "react"



const UseRefDemo = () => {
    const[msg,setMsg]=useState('tips');
    let task=useRef(null)


    function Tips1(){
        setMsg("enter Tips1")
    }
    function Tips2(){
        setMsg("enter Tips2")
    }
    function Tips3(){
        setMsg("enter Tips3")
    }

    function handleTips(){
        // Tips1();
        // Tips2();
        // Tips3();

        setTimeout(Tips1,3000);//to control function no to execute
        task.current =setTimeout(Tips2,6000);//
        setTimeout(Tips3,10000);//


    }


    function handleCancleClick(){
        clearTimeout(task.current);
        prompt("Are you sure want to cancle Tips2 function")
        
    }
  return (
    <div className="container ">
       <div className="text-center">
       <button onClick={()=>{handleTips()}}>Show Tips</button>
       <button onClick={()=>{handleCancleClick()}}>Cancle tips2</button>
       <h3>{msg}</h3>
       </div>
      
    </div>
  )
}

export default UseRefDemo;
