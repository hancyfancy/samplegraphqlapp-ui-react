import { Entities } from "../../models/Entity";
import { useSearchService } from "../../contexts/SearchProvider";
import { StudentProperties } from "../../models/Student";
import { CollegeProperties } from "../../models/College";
import { BookProperties } from "../../models/Book";
import { useState } from "react";

const QueryInput = () => {
    const {selectedEntity, searchQuery, newSearchQuery} = useSearchService();

    const getKeyWords = (entity: string = selectedEntity) => {
        switch (entity) {
            case "Student":
                return StudentProperties;
            case "College":
                return CollegeProperties;
            case "Book":
                return BookProperties;
            default:
                return [];
        }
    }; 

    const [keyWords, setKeyWords] = useState(getKeyWords(selectedEntity));
    const [independentQueries, setIndependentQueries] = useState<string[]>([]);
    const [addToIndependentQueries, setAddToIndependentQueries] = useState(true);

    const update = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const query = e.target.value;
        const queryLowerCase = query.toLowerCase();
        if (keyWords.findIndex( item =>  queryLowerCase === item.toLowerCase()) > -1) {
            if (independentQueries.findIndex( item =>  item.toLowerCase().includes(queryLowerCase)) > -1) {
                newSearchQuery("");
                setAddToIndependentQueries(false);
            }
            else {
                if (queryLowerCase === "id") {
                    e.target.value = query + " equals ";
                }
                else {
                    e.target.value = query + " contains ";
                }
                setAddToIndependentQueries(true);
            }
        }
        newSearchQuery(e.target.value);
    };

    const keyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const key = e.key;
        if (key === ",") {
            if (addToIndependentQueries) {
                independentQueries.push(searchQuery.replaceAll(",", ""));
                console.log(independentQueries);
            }
            newSearchQuery("");
        }
        else if (key === "Enter") {
            search();
        }
    };

    const search = () => {
        newSearchQuery(independentQueries.join(","));
        //call endpoint
    };

    return <input
        type="text"
        value={searchQuery}
        onChange={update}
        onKeyUp={keyPressed}
    />;
}

export default QueryInput;