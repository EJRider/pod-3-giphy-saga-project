import { useSelector, useDispatch } from 'react-redux';

function SearchList() {

    const dispatch = useDispatch();

    // get the search results to render to the DOM
    const searchList = useSelector(store => store.search_results.data);

    return (
        <div id="searchList">
            {/* condition rendering :: if searchList is not empty, render things */}
            {searchList && searchList.map(gif =>
                <div>
                    <img src={gif.images.downsized.url} />
                    {/* every gif gets its own FAVORITE button 
                    When clicked, adds gif url to database */}
                    <button onClick={()=>{dispatch({type: 'POST_FAVORITES', payload: {
                        link: gif.images.downsized.url
                    }})}}>FAVORITE</button>
                </div>
            )}
        </div>
    )
}

export default SearchList;