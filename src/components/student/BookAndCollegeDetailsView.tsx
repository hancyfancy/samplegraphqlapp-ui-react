import { useStudentService } from "../../contexts/StudentProvider";

const BookAndCollegeDetailsView = () => {
    const {bookAndCollegeDets} = useStudentService();

    return <code>
        {JSON.stringify(bookAndCollegeDets!)}
    </code>;
}

export default BookAndCollegeDetailsView;