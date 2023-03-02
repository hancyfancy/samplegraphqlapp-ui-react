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

export interface Book {
    id: string,
    name: string,
    author: string
}

export interface College {
    id: string,
    name: string,
    location: string,
    rating: number
}