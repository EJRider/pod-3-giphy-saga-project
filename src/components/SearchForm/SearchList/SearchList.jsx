import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function SearchList() {

    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    const searchList = useSelector(store => store.search_results.data);

    return (
        <div id="searchList">
            {searchList && searchList.map(gif =>
                <div>
                    <img src={gif.images.downsized.url} />
                    <button onClick={()=>{dispatch({type: 'POST_FAVORITES', payload: {
                        link: gif.images.downsized.url
                    }})}}>FAVORITE</button>
                </div>
            )}
        </div>
    )
}

export default SearchList;