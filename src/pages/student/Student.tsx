import { useStudentService } from "../../contexts/StudentProvider";
import { BookAndCollegeDetails } from "../../models/BookAndCollegeDetails";

const Student = () => {
    const {bookAndCollegeDets, callBookAndCollegeDetails} = useStudentService();

    

    return <div>
        Hello
    </div>;
}

export default Student;