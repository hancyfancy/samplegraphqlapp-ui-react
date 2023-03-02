import FirstNameInput from "../../components/student/FirstNameInput";
import IdInput from "../../components/student/IdInput";
import { useStudentService } from "../../contexts/StudentProvider";

const Student = () => {
    const {bookAndCollegeDets, callBookAndCollegeDetails, firstName, id} = useStudentService();

    return <div>
        <FirstNameInput></FirstNameInput>

        <IdInput></IdInput>

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