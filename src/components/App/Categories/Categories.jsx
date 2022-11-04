import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Categories({ id }) {
    const dispatch = useDispatch();
    // category is equal to <option VALUE> property, which are numeric IDs
    const [category, setCategory] = useState('');
    // keeps list of categories
    const allCategories = useSelector(store => store.category);
    // console.log('categories', allCategories);

    const dropdownSelect = () => {
        // if category is = 0 (or default value), send alert and end early
        if(!category) {
            alert('A category must be set to submit!')
            return;
        }
        // tell Sagas to get axios going
        dispatch({type:'PUT_FAVORITE', payload: {
            category: category,
            id: id
        }})
    }

    return (
        <div>
            {/* <select> tag is dropdown box */}
            <select onChange={(e) => setCategory(e.target.value)}>
                {/* Default option that is non-selectable */}
                <option key={0} defaultValue={0} hidden>Select a Category</option>
                {/* Map through each category and place them in the dropdown box as options */}
                {allCategories.map(category => 
                    <option key={category.id} value={category.id} >{category.name}</option>    
                )}
            </select>
            {/* click handler that sends category update to the database */}
            <button onClick={dropdownSelect}>SET CATEGORY</button>
        </div>
    )
}

export default Categories;