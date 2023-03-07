import { useEffect, useState } from "react";
import { useStudentService } from "../../contexts/StudentProvider";

const StudentCollection = () => {
    const {callStudents, studnts} = useStudentService();
    const [table, setTable] = useState<JSX.Element | undefined>(undefined);

    useEffect(() => {
        callStudents();
    }, []);

    useEffect(() => {
        setTable(studnts !== undefined
            ? <table>
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
            : <></>);
    }, [studnts]);

    return table!;
}

export default StudentCollection;