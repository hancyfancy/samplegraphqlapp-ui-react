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

    const captionStyle = {
        fontSize: "70px",
        fontWeight: "600",
        color: "#b393d3",
        textShadow: "1px 1px 0px #957dad, 1px 2px 0px #957dad, 1px 3px 0px #957dad, 1px 4px 0px #957dad, 1px 5px 0px #957dad, 1px 6px 0px #957dad, 1px 10px 5px rgba(16, 16, 16, 0.5), 1px 15px 10px rgba(16, 16, 16, 0.4), 1px 20px 30px rgba(16, 16, 16, 0.3), 1px 25px 50px rgba(16, 16, 16, 0.2)",
        textAlign: "center" as const,
        textTransform: "uppercase" as const
    };

    const headerStyle = {
        paddingTop: "12px",
        paddingBottom: "12px",
        backgroundColor: "#04AA6D",
        color: "white",
        textAlign: "left" as const
    };

    const getStudentsDetails = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTable(studnts !== undefined
            ? <table>
                <caption style={captionStyle}>Students</caption>
                <thead style={headerStyle}>
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
                <caption style={captionStyle}>Books</caption>
                <thead style={headerStyle}>
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
                <caption style={captionStyle}>College</caption>
                <thead style={headerStyle}>
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
                <caption style={captionStyle}>Students</caption>
                <thead style={headerStyle}>
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