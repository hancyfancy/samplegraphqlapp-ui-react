import { CollegeBooks } from "./CollegeBooks";
import { Student } from "./Student";

export interface CollegeStudent extends Student {
    college: CollegeBooks
}