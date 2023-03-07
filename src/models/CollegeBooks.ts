import { Book } from "./Book";
import { College } from "./College";

export interface CollegeBooks extends College {
    books: Book[]
}