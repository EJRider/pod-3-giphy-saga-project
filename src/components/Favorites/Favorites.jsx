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
        <>
            <ul> 
                {favorites.map(fave => (
                    <li>
                        {fave}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Favorites;