import BookAndCollegeDetailsButton from "../../components/student/BookAndCollegeDetailsButton";
import BookAndCollegeDetailsView from "../../components/student/BookAndCollegeDetailsView";
import FirstNameInput from "../../components/student/FirstNameInput";
import IdInput from "../../components/student/IdInput";
import StudentCollection from "../../components/student/StudentCollection";
import StudentList from "../../components/student/StudentList";

const Student = () => {
    return <div>
        <FirstNameInput></FirstNameInput>

        <IdInput></IdInput>

        <BookAndCollegeDetailsButton></BookAndCollegeDetailsButton>

        <BookAndCollegeDetailsView></BookAndCollegeDetailsView>

        <StudentCollection></StudentCollection>

        <StudentList></StudentList>
    </div>;
}

export default Student;