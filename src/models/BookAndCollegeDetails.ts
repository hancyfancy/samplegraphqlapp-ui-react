import { Book } from "./Book"
import { College } from "./College"

export interface BookAndCollegeDetails {
    bookDetails: BookDetails,
    collegeDetails: CollegeDetails
}

export interface BookDetails {
    studentFirstName: string,
    books: Book[]
}

export interface CollegeDetails {
    studentId: string,
    college: College
}