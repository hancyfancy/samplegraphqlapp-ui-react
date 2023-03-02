import { useStudentService } from "../../contexts/StudentProvider";

const BookAndCollegeDetailsButton = () => {
    const {callBookAndCollegeDetails, firstName, id} = useStudentService();

    return <div>
        <input
            type="button"
            onClick={() => callBookAndCollegeDetails({studentFirstName: firstName, studentId: id})}
            value="Submit"
        />
    </div>;
}

export default BookAndCollegeDetailsButton;