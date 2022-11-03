import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Categories() {
    const dispatch = useDispatch();

    const allCategories = useSelector(store => store.category);

    useEffect(() => {
        dispatch({ 
            type: "FETCH_CATEGORY" 
        });
    })
    return (
        <ul>
            {/* {allCategories.map(category => (
                <li key={category}>{category}</li>
            ))} */}
            <li>{allCategories}</li>
        </ul>
    )
}

export default Categories;