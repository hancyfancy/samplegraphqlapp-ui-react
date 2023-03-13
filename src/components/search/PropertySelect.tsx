import { useSearchService } from "../../contexts/SearchProvider";
import { BookProperties } from "../../models/Book";
import { CollegeProperties } from "../../models/College";
import { StudentProperties } from "../../models/Student";

const PropertySelect = () => {
    const {selectedEntity, selectedProperty, newSelectedProperty} = useSearchService();

    const update = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        newSelectedProperty(e.target.value);
    };

    const getProperties = (entity: string = selectedEntity) => {
        switch (entity) {
            case "Student":
                return <select
                    value={selectedProperty}
                    onChange={update}
                >
                    {
                        StudentProperties.map((property) => {
                            return <option key={property}>{property}</option>;
                        })
                    }
                </select>;
            case "College":
                return <select
                    value={selectedProperty}
                    onChange={update}
                >
                    {
                        CollegeProperties.map((property) => {
                            return <option key={property}>{property}</option>;
                        })
                    }
                </select>;
            case "Book":
                return <select
                    value={selectedProperty}
                    onChange={update}
                >
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