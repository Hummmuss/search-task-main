import "./styles.css";
import {useContext} from "react";
import {SearchContext} from "../SearchResults/SearchContext";

export function SearchForm() {
    const {searchWord, setSearchWord} = useContext(SearchContext);

    return (
        <div className="searchForm">
            <form>
                <input type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)}/>
            </form>
        </div>
    );
}
