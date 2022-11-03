import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Categories({ id }) {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('');
    const allCategories = useSelector(store => store.category);
    // console.log('categories', allCategories);

    const dropdownSelect = () => {
        if(!category) {
            alert('A category must be set to submit!')
            return;
        }
        dispatch({type:'PUT_FAVORITE', payload: {
            category: category,
            id: id
        }})
    }

    return (
        <div>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option key={0} defaultValue={0} hidden>Select a Category</option>
                {allCategories.map(category => 
                    <option key={category.id} value={category.id} >{category.name}</option>    
                )}

                {/* <option value="select">Select One</option>
                <option value="funny">Funny</option>
                <option value="cohort">Cohort</option> 
                <option value="comedy">Comedy</option> 
                <option value="nsfw">NSFW</option> 
                <option value="meme">Meme</option>   */}
            </select>
            <button onClick={dropdownSelect}>SET CATEGORY</button>
        </div>
    )
}

export default Categories;