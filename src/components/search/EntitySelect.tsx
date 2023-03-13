import { Entities } from "../../models/Entity";
import { useSearchService } from "../../contexts/SearchProvider";

const EntitySelect = () => {
    const {selectedEntity, newSelectedEntity} = useSearchService();

    const update = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        newSelectedEntity(e.target.value);
    };

    return <select
        value={selectedEntity}
        onChange={update}
    >
        {
            Entities.map((entity, index) => {
                return <option 
                    key={entity}
                >
                    {entity}
                </option>;
            })
        }
    </select>;
}

export default EntitySelect;