import { createContext, useState, useMemo, useContext } from "react";
import { BookAndCollegeDetails } from "../models/BookAndCollegeDetails";
import { BookAndCollegeQuery } from "../models/BookAndCollegeQuery";
import { CollegeStudent } from "../models/CollegeStudent";
import { bookAndCollegeDetails, students } from "../services/StudentService";

interface IStudentContext {
    bookAndCollegeDets: BookAndCollegeDetails | undefined;
    callBookAndCollegeDetails: (query: BookAndCollegeQuery) => Promise<void>;
    firstName: string;
    newFirstName: (nFristName: string) => void;
    id: string;
    newId: (nId: string) => void;
    studnts: CollegeStudent[] | undefined;
    callStudents: () => Promise<void>;
}

const StudentContext = createContext<IStudentContext | undefined>(undefined);

export const StudentProvider = ({ children } : {children: JSX.Element | JSX.Element[]}) => {
    const [bookAndCollegeDets, setbookAndCollegeDets] = useState<BookAndCollegeDetails | undefined>(undefined);
    const [firstName, setFirstName] = useState("");
    const [id, setId] = useState("");
    const [studnts, setStudnts] = useState<CollegeStudent[] | undefined>(undefined);

    const value = useMemo(
        () => ({ 
            bookAndCollegeDets: bookAndCollegeDets,
            callBookAndCollegeDetails: async (query: BookAndCollegeQuery): Promise<void> => {
                await bookAndCollegeDetails(query)
                .then((data) => {setbookAndCollegeDets(data);});
            },
            firstName: firstName,
            newFirstName: (nFristName: string): void => {
                setFirstName(nFristName);
            },
            id: id,
            newId: (nId: string): void => {
                setId(nId);
            },
            studnts: studnts,
            callStudents: async (): Promise<void> => {
                await students()
                .then((data) => {setStudnts(data);});
            }
        }), 
        [bookAndCollegeDets, firstName, id, studnts]
    );

    return (
        <StudentContext.Provider value={value}>
            {children}
        </StudentContext.Provider>
    )
};

export const useStudentService = () => {
    return useContext(StudentContext)!;
};

export default StudentContext;