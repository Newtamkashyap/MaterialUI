import { useReducer } from "react";
let likeCounts = {
    counts: 0,
}

function reducer(state, action) {
    console.log("printing action", action)
    console.log("printing state", state)

    if (action.type == "likes") {
        console.log("photo likes")

        return { counts: state.counts + 1 }


    }
    else if (action.type == "dislikes") {
        console.log("photo dislikes")
        return { counts: state.counts > 0 ? state.counts - 1 : 0 }
    }

    // return state;

    // return {counts :state.counts+10};


}



export function ReducerExample() {
    const [state, dispatch] = useReducer(reducer, likeCounts)

    function handleLikeButton() {
        console.log("photo like");
        dispatch({ type: "likes" })
    }

    function handleDislikeButton() {
        // console.log("photo dislike");

        dispatch({ type: "dislikes" })
    }

    return (
        <div>
            <h3>Reducer Example</h3>
            <img src="images/google.webp" height={"300px"} width={"300px"} />
            <div className="bi bi-hand-thumbs-up-fill">{state.counts}likes</div>
            <div>

                <button onClick={handleLikeButton} className="btn btn-warning">likes</button>
                <button onClick={handleDislikeButton} className="btn btn-danger">dislikes</button>
            </div>

           


        </div>
    )
}