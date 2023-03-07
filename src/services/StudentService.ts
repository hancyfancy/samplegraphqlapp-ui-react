import { BookAndCollegeDetails } from "../models/BookAndCollegeDetails";
import { BookAndCollegeQuery } from "../models/BookAndCollegeQuery";
import { CollegeStudent } from "../models/CollegeStudent";

export const bookAndCollegeDetails = async (query: BookAndCollegeQuery): Promise<BookAndCollegeDetails> => {
    const response = await fetch('https://localhost:7185/api/Student/BookAndCollegeDetails', { 
        method: 'post', 
        headers: new Headers({
            'Content-Type': 'application/json'
        }), 
        body: JSON.stringify(query, (_, v) => typeof v === 'bigint' ? v.toString() : v)
    });
    const responseJson = await response.text();
    return JSON.parse(responseJson);
};

export const students = async (): Promise<CollegeStudent[]> => {
    const response = await fetch('https://localhost:7185/api/Student/Students', {
        method: 'get',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    const responseJson = await response.text();
    return JSON.parse(responseJson);
};