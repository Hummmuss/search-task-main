import {createContext} from "react";

interface SearchContextData {
    searchWord: string;
    setSearchWord: (value: string) => void;
}
export const SearchContext = createContext<SearchContextData>({
    searchWord: "", setSearchWord: () => {
    }
});

