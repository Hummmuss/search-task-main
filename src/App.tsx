import {useState} from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";

export default function App() {
  const [searchWord, setSearchWord] = useState("");

  return (
    <SearchContext.Provider value={{ searchWord, setSearchWord }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
