import { useState } from "react";
import SearchList from "./SearchList/SearchList";
import { useDispatch } from "react-redux";

function SearchForm() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!search) {
            alert('Search box must be filled!')
            return;
        }

        dispatch({ type:'GET_GIPHY', payload: search })
    }



    return (
        <div id="searchForm">
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