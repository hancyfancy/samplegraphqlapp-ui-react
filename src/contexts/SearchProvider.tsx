import { createContext, useState, useMemo, useContext } from "react";
import { BookAndCollegeDetails } from "../models/BookAndCollegeDetails";
import { BookAndCollegeQuery } from "../models/BookAndCollegeQuery";
import { CollegeStudent } from "../models/CollegeStudent";
import { bookAndCollegeDetails, students } from "../services/StudentService";

interface ISearchContext {
    selectedEntity: string;
    newSelectedEntity: (nSelectedEntity: string) => void;
    selectedProperty: string;
    newSelectedProperty: (nSelectedProperty: string) => void;
}

const SearchContext = createContext<ISearchContext | undefined>(undefined);

export const SearchProvider = ({ children } : {children: JSX.Element | JSX.Element[]}) => {
    const [entity, setEntity] = useState("Student");
    const [property, setProperty] = useState("Id");

    const value = useMemo(
        () => ({ 
            selectedEntity: entity,
            newSelectedEntity: (nSelectedEntity: string): void => {
                setEntity(nSelectedEntity);
            },
            selectedProperty: property,
            newSelectedProperty: (nSelectedProperty: string): void => {
                setProperty(nSelectedProperty);
            }
        }), 
        [entity, property]
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