import {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Categories from '../App/Categories/Categories';


function Favorites(){
    const dispatch  = useDispatch();
    const favorites = useSelector(store => store.favorites);
    // ENUM object for conditional rendering of category names
    // we COULD do better and make it scalable but...
    const category = {
        '1':'funny',
        '2':'cohort',
        '3':'cartoon',
        '4':'nsfw',
        '5':'meme'
    }

    useEffect(() => { 
        fetchFavorites();
        fetchCategories();
    }, []);

    // ... axios.get(/api/favorite)
    const fetchFavorites = () => {
        dispatch({
            type:'GET_FAVORITES'
        })
    }

    // ... axios.get(/api/category)
    const fetchCategories = () => {
        dispatch({ 
            type: "FETCH_CATEGORY" 
        });
    }

    return(
            <form>
                {/* for every gif, render and give a Categories component */}
                {favorites.map(gif => 
                    <div key={gif.id}>
                        <img src={gif.link} />
                        <Categories id={gif.id}/>
                        {/* conditional rendering for gif's current category.
                        yes, we misspelled category in the table
                        category[thing] === category.thing */}
                        {gif.catergory_id && <p>GIF category: {category[gif.catergory_id]}</p>}
                    </div>
                )}
            </form>
    );
}

export default Favorites;