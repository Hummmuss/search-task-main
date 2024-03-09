import {useCallback, useContext, useEffect, useState} from "react";
import {SearchContext} from "./SearchContext";
import {UserCard} from "../UserCard/UserCard";
import "./style.css";
export function SearchResults() {
    const [users, setUsers] = useState([]);
    const {searchWord} = useContext(SearchContext);
    const [loading, setLoading] = useState(false);

    const handleSearch = useCallback((searchWord: string) => {
        if (searchWord) {
            setLoading(true);
            fetch(`https://dummyjson.com/users/search?q=${searchWord}`)
                .then(res => res.json())
                .then(res => {
                    setUsers(res.users);
                    setLoading(false);
                });
        }
    }, []);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            handleSearch(searchWord);
        }, 400);
        return () => {
            clearTimeout(delayDebounce);
        };
    }, [searchWord, handleSearch]);

    return (
        <div className="usersList">
            {loading
                ? <div>Loading...</div>
                : (users.length > 0
                        ? (users.map((user: object) => (
                            <UserCard {...user}/>
                        )))
                        : (<div>No users with such name</div>)
                )}
        </div>
    );
}
