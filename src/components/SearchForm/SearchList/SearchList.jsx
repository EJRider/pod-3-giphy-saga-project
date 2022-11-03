import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';


function SearchList() {
    useEffect(() => {

    }, [])

    const searchList = useSelector(store => store.search_results.data);

    return (
        <div id="searchList">
            {searchList && searchList.map(gif =>
                <div>
                    <img src={gif.images.downsized.url} />
                    <button>FAVORITE</button>
                </div>
            )}
        </div>
    )
}

export default SearchList;