import { useState } from "react";
import { useStudentService } from "../../contexts/StudentProvider";
import { BookAndCollegeDetails } from "../../models/BookAndCollegeDetails";

const Student = () => {
    const [firstName, setFirstName] = useState("");
    const [id, setId] = useState("");

    const {bookAndCollegeDets, callBookAndCollegeDetails} = useStudentService();

    const updateFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFirstName(e.target.value);
    };

    const updateId = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setId(e.target.value);
    };

    return <div>
        <div>
            <label>Student first name</label>
            <input
                type="text"
                value={firstName}
                onChange={updateFirstName}
            />
        </div>

        <div>
            <label>Student id</label>
            <input
                type="text"
                value={id}
                onChange={updateId}
            />
        </div>

        <div>
            <input
                type="button"
                onClick={() => callBookAndCollegeDetails({studentFirstName: firstName, studentId: id})}
                value="Submit"
            />
        </div>

        <code>
            {JSON.stringify(bookAndCollegeDets!)}
        </code>
    </div>;
}

export default Student;