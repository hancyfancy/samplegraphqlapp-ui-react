import { useStudentService } from "../../contexts/StudentProvider";
import { BookAndCollegeDetails } from "../../models/BookAndCollegeDetails";

const Student = () => {
    const {bookAndCollegeDets, callBookAndCollegeDetails} = useStudentService();

    const getBookAndCollegeDetails = (studentFirstName: string, studentId: string): BookAndCollegeDetails => {
        callBookAndCollegeDetails({ studentFirstName, studentId });
        return bookAndCollegeDets!;
    };

    return <div>
        {JSON.stringify(getBookAndCollegeDetails("Kiran", "S1001"))}
    </div>;
}

export default Student;