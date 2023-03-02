import BookAndCollegeDetailsButton from "../../components/student/BookAndCollegeDetailsButton";
import BookAndCollegeDetailsView from "../../components/student/BookAndCollegeDetailsView";
import FirstNameInput from "../../components/student/FirstNameInput";
import IdInput from "../../components/student/IdInput";

const Student = () => {
    return <div>
        <FirstNameInput></FirstNameInput>

        <IdInput></IdInput>

        <BookAndCollegeDetailsButton></BookAndCollegeDetailsButton>

        <BookAndCollegeDetailsView></BookAndCollegeDetailsView>
    </div>;
}

export default Student;