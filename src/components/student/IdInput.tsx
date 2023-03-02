import { useStudentService } from "../../contexts/StudentProvider";

const IdInput = () => {
    const {id, newId} = useStudentService();

    const updateId = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        newId(e.target.value);
    };

    return <div>
        <label>Student id</label>
        <input
            type="text"
            value={id}
            onChange={updateId}
        />
    </div>;
}

export default IdInput;