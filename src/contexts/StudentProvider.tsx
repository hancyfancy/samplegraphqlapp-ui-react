import { createContext, useState, useMemo, useContext } from "react";
import { BookAndCollegeDetails } from "../models/BookAndCollegeDetails";
import { BookAndCollegeQuery } from "../models/BookAndCollegeQuery";
import { bookAndCollegeDetails } from "../services/StudentService";

interface IStudentContext {
    bookAndCollegeDets: BookAndCollegeDetails | undefined;
    callBookAndCollegeDetails: (query: BookAndCollegeQuery) => Promise<void>;
}

const StudentContext = createContext<IStudentContext | undefined>(undefined);

export const StudentProvider = ({ children } : {children: JSX.Element | JSX.Element[]}) => {
    const [bookAndCollegeDets, setbookAndCollegeDets] = useState<BookAndCollegeDetails | undefined>(undefined);

    const value = useMemo(
        () => ({ 
            bookAndCollegeDets: bookAndCollegeDets,
            callBookAndCollegeDetails: async (query: BookAndCollegeQuery): Promise<void> => {
                await bookAndCollegeDetails(query)
                .then((data) => {setbookAndCollegeDets(data);});
            }, 
        }), 
        [bookAndCollegeDets]
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