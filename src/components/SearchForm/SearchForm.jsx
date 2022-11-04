import { useState } from "react";
import SearchList from "./SearchList/SearchList";
import { useDispatch } from "react-redux";

function SearchForm() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        // no refresh pls
        e.preventDefault();

        // if search textbox is EMPTY, why empty? try again
        if(!search) {
            alert('Search box must be filled!')
            return;
        }

        // tell Sagas to do its job and get a list of gifs from GIPHY
        // using the search parameter
        dispatch({ type:'GET_GIPHY', payload: search })
    }

    return (
        <div id="searchForm">
            {/* Search form */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button>Search</button>
            </form> 

            <SearchList />
        </div>
    )
}

export default SearchForm;