import { useEffect } from "react";
import { useStudentService } from "../../contexts/StudentProvider";

const StudentCollection = () => {
    const {callStudents, studnts} = useStudentService();

    useEffect(() => {
        callStudents();
    }, []);

    return studnts !== undefined ? <table>
        <thead>
            <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {studnts!.map((elem, index) => {
                return <tr key={elem.id}>
                    <td>{elem.firstName}</td>
                    <td>{elem.lastName}</td>
                    <td>{elem.email}</td>
                </tr>;
            })}
        </tbody>
    </table>
    : <></>;
}

export default StudentCollection;