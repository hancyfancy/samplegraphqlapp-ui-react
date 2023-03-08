import { useEffect, useState } from "react";
import { useStudentService } from "../../contexts/StudentProvider";
import { Book } from "../../models/Book";
import { CollegeBooks } from "../../models/CollegeBooks";

const StudentList = () => {
    const {callStudents, studnts} = useStudentService();
    const [list, setList] = useState<JSX.Element | undefined>(undefined);

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
        setList(studnts !== undefined
            ? <div>get student details</div>
            : <></>);
    };

    const getBooksDetails = (e: React.MouseEvent<HTMLInputElement>, books: Book[]) => {
        e.preventDefault();
        setList(books !== undefined
            ? <div>get books details</div>
            : <></>);
    };

    const getCollegeDetails = (e: React.MouseEvent<HTMLInputElement>, collegeBooks: CollegeBooks) => {
        e.preventDefault();
        setList(collegeBooks !== undefined
            ? <div>get college details</div>
            : <></>);
    };

    const resetList = (eventTarget: HTMLInputElement) => {
        const uList = Array.from(eventTarget.parentElement?.parentElement?.children!);
        uList.forEach((elem, index) => {
            const listElement = elem as HTMLUListElement;
            const listChildren = Array.from(listElement.children);
            const info = listChildren?.filter(s => s.classList.contains("studentInfo"));
            info.forEach((elem, index) => {
                const divElement = elem as HTMLDivElement;
                divElement.hidden = true;
            });
        });
    };

    const selectListItem = (eventTarget: HTMLInputElement) => {
        const listChildren = Array.from(eventTarget.parentElement?.children!);
        const info = listChildren?.filter(s => s.classList.contains("studentInfo"));
        info.forEach((elem, index) => {
            const divElement = elem as HTMLDivElement;
            divElement.hidden = !divElement.hidden;
        });
    };

    const toggleInfo = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        const eventTarget = e.target as HTMLInputElement;
        resetList(eventTarget);
        selectListItem(eventTarget);
    };

    useEffect(() => {
        setList(studnts !== undefined
            ? <ul>
                {studnts!.map((elem, index) => {
                    return <li key={elem.id}>
                       <input
                            type="button"
                            onClick={(e) => toggleInfo(e)}
                            value={"Student " + (index+1).toString()}/>
                        <div hidden className="studentInfo">
                            <span>First name: </span>
                            <span>{elem.firstName}</span>
                        </div>
                        <div hidden className="studentInfo">
                            <span>Last name: </span>
                            <span>{elem.lastName}</span>
                        </div>
                        <div hidden className="studentInfo">
                            <span>Email: </span>
                            <span>{elem.email}</span>
                        </div>
                        <div hidden className="studentInfo">
                            <input
                            type="button"
                            onClick={(e) => getCollegeDetails(e, elem.college)}
                            value="College"/>
                        </div>
                    </li>;
                })}
            </ul>
            : <></>);
    }, [studnts]);

    return list!;
}

export default StudentList;