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
                        <img src={gif.link} />
                    </div>
                )}
            </form>
        
    );
}

export default Favorites;