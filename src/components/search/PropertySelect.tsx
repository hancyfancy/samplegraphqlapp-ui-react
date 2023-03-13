import { useSearchService } from "../../contexts/SearchProvider";
import { BookProperties } from "../../models/Book";
import { CollegeProperties } from "../../models/College";
import { StudentProperties } from "../../models/Student";

const PropertySelect = () => {
    const {selectedEntity} = useSearchService();

    const getProperties = (entity: string = selectedEntity) => {
        switch (entity) {
            case "Student":
                return <select>
                    {
                        StudentProperties.map((property) => {
                            return <option key={property}>{property}</option>;
                        })
                    }
                </select>;
            case "College":
                return <select>
                    {
                        CollegeProperties.map((property) => {
                            return <option key={property}>{property}</option>;
                        })
                    }
                </select>;
            case "Book":
                return <select>
                    {
                        BookProperties.map((property) => {
                            return <option key={property}>{property}</option>;
                        })
                    }
                </select>;
            default:
                return <></>;
        }
    }; 

    return getProperties(selectedEntity);
}

export default PropertySelect;