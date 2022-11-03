import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Categories() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ 
            type: "FETCH_CATEGORY" 
        });
    })

    return (
        <div>
            <button>Category</button>
            <div>
                <a>Funny</a>
                <a>Cohort</a>
                <a>Cartoon</a>
                <a>nsfw</a>
                <a>Meme</a>
            </div>
        </div>
    )
}

export default Categories;