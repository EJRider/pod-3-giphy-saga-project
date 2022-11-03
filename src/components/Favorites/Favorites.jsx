import {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';


function Favorites(){
    const dispatch  = useDispatch();
    const favorites = useSelector(store => store.favorites);

    useEffect(() => { 
        fetchFavorites();
    }, []);

    const fetchFavorites = () => {
        dispatch({
            type:'GET_FAVORITES'
        })
    }

    return(
        
            <form> 
                {favorites.map(gif => 
                    <div>
                        <img src={gif.images.downsized.url} />
                        <label for="categories">Choose a category:</label>
                        <input list="categories" name="categories" id="categories" />
                            <datalist id="categories">
                                <option value="funny"/>
                                <option value="nsfw"/>
                            </datalist>
                        <input type="submit" />
                    </div>
                )}
            </form>
        
    );
}

export default Favorites;