import { useEffect, useState } from "react";
import { useStudentService } from "../../contexts/StudentProvider";

const StudentList = () => {
    const {callStudents, studnts} = useStudentService();
    const [list, setList] = useState<JSX.Element | undefined>(undefined);

    useEffect(() => {
        callStudents();
    }, []);

    const resetList = (eventTarget: HTMLInputElement) => {
        const uList = Array.from(eventTarget.parentElement?.parentElement?.children!);
        uList.forEach((elem, index) => {
            const listElement = elem as HTMLUListElement;
            const listChildren = Array.from(listElement.children);
            const info = listChildren?.filter(s => s.classList.contains("toggle"));
            info.forEach((elem, index) => {
                const divElement = elem as HTMLDivElement;
                divElement.hidden = true;
            });
        });
    };

    const selectListItem = (eventTarget: HTMLInputElement) => {
        const listChildren = Array.from(eventTarget.parentElement?.children!);
        const info = listChildren?.filter(s => s.classList.contains("toggle"));
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
                        <div hidden className="toggle">
                            <span>First name: </span>
                            <span>{elem.firstName}</span>
                        </div>
                        <div hidden className="toggle">
                            <span>Last name: </span>
                            <span>{elem.lastName}</span>
                        </div>
                        <div hidden className="toggle">
                            <span>Email: </span>
                            <span>{elem.email}</span>
                        </div>
                        {elem.college !== undefined
                        ? <div className="toggle">
                            <ul>
                                <li key={elem.college.id}>
                                    <input
                                        type="button"
                                        onClick={(e) => toggleInfo(e)}
                                        value={"College for student " + (index+1).toString()}/>
                                    <div hidden className="toggle">
                                        <span>Name: </span>
                                        <span>{elem.college.name}</span>
                                    </div>
                                    <div hidden className="toggle">
                                        <span>Location: </span>
                                        <span>{elem.college.location}</span>
                                    </div>
                                    <div hidden className="toggle">
                                        <span>Rating: </span>
                                        <span>{elem.college.rating}</span>
                                    </div>
                                    {elem.college.books !== undefined
                                    ? <div className="toggle">
                                        <ul>
                                            {elem.college.books!.map((elem, index) => {
                                                return <li key={elem.id}>
                                                    <input
                                                        type="button"
                                                        onClick={(e) => toggleInfo(e)}
                                                        value={"Book " + (index+1).toString()}/>
                                                    <div hidden className="toggle">
                                                        <span>First name: </span>
                                                        <span>{elem.name}</span>
                                                    </div>
                                                    <div hidden className="toggle">
                                                        <span>Last name: </span>
                                                        <span>{elem.author}</span>
                                                    </div>
                                                 </li>
                                            })};
                                        </ul>
                                    </div>
                                    : <></>}
                                </li>
                            </ul>
                        </div>
                        : <></>}
                    </li>;
                })}
            </ul>
            : <></>);
    }, [studnts]);

    return list!;
}

export default StudentList;