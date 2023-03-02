import { useStudentService } from "../../contexts/StudentProvider";

const FirstNameInput = () => {
    const {firstName, newFirstName} = useStudentService();

    const updateFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        newFirstName(e.target.value);
    };

    return <div>
        <label>Student first name</label>
        <input
            type="text"
            value={firstName}
            onChange={updateFirstName}
        />
    </div>;
}

export default FirstNameInput;