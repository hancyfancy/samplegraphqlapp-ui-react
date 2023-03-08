import { useStudentService } from "../../contexts/StudentProvider";

const BookAndCollegeDetailsButton = () => {
    const {callBookAndCollegeDetails, firstName, id} = useStudentService();

    const getBookAndCollegeDetails = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        callBookAndCollegeDetails({studentFirstName: firstName, studentId: id});
    };

    return <div>
        <input
            type="button"
            onClick={getBookAndCollegeDetails}
            value="Submit"
        />
    </div>;
}

export default BookAndCollegeDetailsButton;