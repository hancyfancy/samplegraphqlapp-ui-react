import { createContext, useState, useMemo, useContext } from "react";
import { BookAndCollegeDetails } from "../models/BookAndCollegeDetails";
import { BookAndCollegeQuery } from "../models/BookAndCollegeQuery";
import { CollegeStudent } from "../models/CollegeStudent";
import { bookAndCollegeDetails, students } from "../services/StudentService";

interface ISearchContext {
    selectedEntity: string;
    newSelectedEntity: (nSelectedEntity: string) => void;
}

const SearchContext = createContext<ISearchContext | undefined>(undefined);

export const SearchProvider = ({ children } : {children: JSX.Element | JSX.Element[]}) => {
    const [entity, setEntity] = useState("Student");

    const value = useMemo(
        () => ({ 
            selectedEntity: entity,
            newSelectedEntity: (nSelectedEntity: string): void => {
                setEntity(nSelectedEntity);
            }
        }), 
        [entity]
    );

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
};

export const useSearchService = () => {
    return useContext(SearchContext)!;
};

export default SearchContext;