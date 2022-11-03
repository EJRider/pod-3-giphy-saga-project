import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Categories from '../App/Categories/Categories';


function Favorites(){
    const dispatch  = useDispatch();
    const favorites = useSelector(store => store.favorites);

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
                    </div>
                )}
            </form>
    );
}

export default Favorites;