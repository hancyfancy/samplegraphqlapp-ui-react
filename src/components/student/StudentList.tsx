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

    const toggleInfoFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        e.preventDefault();
        const eventTarget = e.target as HTMLInputElement;
        eventTarget.style.color = "#777";
        eventTarget.style.fontWeight = "bold";
    };

    const toggleInfoBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        e.preventDefault();
        const eventTarget = e.target as HTMLInputElement;
        eventTarget.style.color = "#444";
        eventTarget.style.fontWeight = "normal";
    };

    const enterButton = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        const eventTarget = e.target as HTMLInputElement;
        eventTarget.style.backgroundColor = "#ccc";
    };

    const leaveButton = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        const eventTarget = e.target as HTMLInputElement;
        eventTarget.style.backgroundColor = "#eee";
        eventTarget.style.color = "#444";
        eventTarget.style.cursor = "pointer";
        eventTarget.style.padding = "18px";
        eventTarget.style.border = "none";
        eventTarget.style.textAlign = "left" as const;
        eventTarget.style.outline = "none";
        eventTarget.style.fontSize = "15px";
        eventTarget.style.transition = "0.4s";
    };

    const buttonStyle = {
        backgroundColor: "#eee",
        color: "#444",
        cursor: "pointer",
        padding: "18px",
        border: "none",
        textAlign: "left" as const,
        outline: "none",
        fontSize: "15px",
        transition: "0.4s"
    };

    const listStyle = {
        listStyleType: "none"
    };

    useEffect(() => {
        setList(studnts !== undefined
            ? <ul style={listStyle}>
                {studnts!.map((elem, index) => {
                    return <li key={elem.id}>
                       <input
                            type="button"
                            onMouseEnter={(e) => enterButton(e)}
                            onMouseLeave={(e) => leaveButton(e)}
                            onFocus={(e) => toggleInfoFocus(e)}
                            onBlur={(e) => toggleInfoBlur(e)}
                            onClick={(e) => toggleInfo(e)}
                            style={buttonStyle}
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
                            <ul style={listStyle}>
                                <li key={elem.college.id}>
                                    <input
                                        type="button"
                                        onMouseEnter={(e) => enterButton(e)}
                                        onMouseLeave={(e) => leaveButton(e)}
                                        onFocus={(e) => toggleInfoFocus(e)}
                                        onBlur={(e) => toggleInfoBlur(e)}
                                        onClick={(e) => toggleInfo(e)}
                                        style={buttonStyle}
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
                                        <ul style={listStyle}>
                                            {elem.college.books!.map((elem, index) => {
                                                return <li key={elem.id}>
                                                    <input
                                                        type="button"
                                                        onMouseEnter={(e) => enterButton(e)}
                                                        onMouseLeave={(e) => leaveButton(e)}
                                                        onFocus={(e) => toggleInfoFocus(e)}
                                                        onBlur={(e) => toggleInfoBlur(e)}
                                                        onClick={(e) => toggleInfo(e)}
                                                        style={buttonStyle}
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
                                            })}
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