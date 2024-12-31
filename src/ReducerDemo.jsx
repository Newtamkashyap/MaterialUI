import { useReducer } from "react"
import User from "./User"


// let initalState = {
//     veiwersCount: 0
// }

function reducer(state, action) {
    switch (action.type) {
        case "join":
            return { veiwersCount: state.veiwersCount + 1 }

        case "exit":
            return { veiwersCount: state.veiwersCount - 1 }


    }

}


const ReducerDemo = () => {

    const [state, dispatch] = useReducer(reducer, {veiwersCount:0});



    function handleJoinClick() {
        dispatch({ type: "join" });
    }

    function handleExitClick() {
        dispatch({ type: "exit" });
    }
    return (
        <div>
            <h4>Watch Live</h4>
            <iframe height="200" width="200" src="https://www.youtube.com/embed/mbo8r9SrXYQ&gt"></iframe>
            <div>
                {/* <div className="bi bi-eye">{state.veiwersCount}Veiwing</div> */}
            </div>
            <div>
                <h3>User 1</h3>
                <button onClick={handleJoinClick}>join</button>
                <button onClick={handleExitClick}>Exit</button>

            </div>
            <div>
                <h3>User 2</h3>
                <button onClick={handleJoinClick}>join</button>
                <button onClick={handleExitClick}>Exit</button>

            </div>

         
            

        </div>


    )
}



export default ReducerDemo
