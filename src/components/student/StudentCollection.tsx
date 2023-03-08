import { useEffect, useState } from "react";
import { useStudentService } from "../../contexts/StudentProvider";
import { Book } from "../../models/Book";
import { CollegeBooks } from "../../models/CollegeBooks";

const StudentCollection = () => {
    const {callStudents, studnts} = useStudentService();
    const [table, setTable] = useState<JSX.Element | undefined>(undefined);

    useEffect(() => {
        callStudents();
    }, []);

    const getStudentsDetails = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTable(studnts !== undefined
            ? <table>
                <caption>Students</caption>
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
                            <td>
                                <input
                                type="button"
                                onClick={(e) => getCollegeDetails(e, elem.college)}
                                value="College"/>
                            </td>
                        </tr>;
                    })}
                </tbody>
            </table>
            : <></>);
    };

    const getBooksDetails = (e: React.MouseEvent<HTMLInputElement>, books: Book[]) => {
        e.preventDefault();
        setTable(books !== undefined
            ? <table>
                <caption>Books</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {books!.map((elem, index) => {
                        return <tr key={elem.id}>
                            <td>{elem.name}</td>
                            <td>{elem.author}</td>
                        </tr>;
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>
                            <input
                                type="button"
                                onClick={(e) => getStudentsDetails(e)}
                                value="Reset"/>
                        </td>
                    </tr>
                </tfoot>
            </table>
            : <></>);
    };

    const getCollegeDetails = (e: React.MouseEvent<HTMLInputElement>, collegeBooks: CollegeBooks) => {
        e.preventDefault();
        setTable(collegeBooks !== undefined
            ? <table>
                <caption>College</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={collegeBooks.id}>
                        <td>{collegeBooks.name}</td>
                        <td>{collegeBooks.location}</td>
                        <td>{collegeBooks.rating}</td>
                        <td>
                            <input
                            type="button"
                            onClick={(e) => getBooksDetails(e, collegeBooks.books)}
                            value="Books"/>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>
                            <input
                                type="button"
                                onClick={(e) => getStudentsDetails(e)}
                                value="Reset"/>
                        </td>
                    </tr>
                </tfoot>
            </table>
            : <></>);
    };

    useEffect(() => {
        setTable(studnts !== undefined
            ? <table>
                <caption>Students</caption>
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
                            <td>
                                <input
                                type="button"
                                onClick={(e) => getCollegeDetails(e, elem.college)}
                                value="College"/>
                            </td>
                        </tr>;
                    })}
                </tbody>
            </table>
            : <></>);
    }, [studnts]);

    return table!;
}

export default StudentCollection;