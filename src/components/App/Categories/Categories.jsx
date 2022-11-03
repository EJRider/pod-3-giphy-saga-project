import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Categories() {
    const dispatch = useDispatch();

    const allCategories = useSelector(store => store.category);
    console.log('categories', allCategories);

    useEffect(() => {
        dispatch({ 
            type: "FETCH_CATEGORY" 
        });
    }, [])

    if(!allCategories) {
        <h1>loading</h1>
    }
    return (
        <div>
            <select>
                <option value="select">Select One</option>
                <option value="funny">Funny</option>
                <option value="cohort">Cohort</option> 
                <option value="comedy">Comedy</option> 
                <option value="nsfw">NSFW</option> 
                <option value="meme">Meme</option>  
            </select>
        </div>
    )
}

export default Categories;