import {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Categories from '../App/Categories/Categories';


function Favorites(){
    const dispatch  = useDispatch();
    const favorites = useSelector(store => store.favorites);
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

    const fetchFavorites = () => {
        dispatch({
            type:'GET_FAVORITES'
        })
    }

    const fetchCategories = () => {
        dispatch({ 
            type: "FETCH_CATEGORY" 
        });
    }

    return(
            <form> 
                {favorites.map(gif => 
                    <div key={gif.id}>
                        <img src={gif.link} />
                        <Categories id={gif.id}/>
                        {gif.catergory_id && <p>GIF category: {category[gif.catergory_id]}</p>}
                    </div>
                )}
            </form>
    );
}

export default Favorites;