export type Title = string
export type Name = string
export type PublishYear = number
export type Genre = FictionGenre | NonFictionGenre | AcademicGenre | Other
export type PhoneNumber = number
export type Date = number | string
export type isAvailable = boolean

export type Rating = 1 | 2 | 3 | 4 | 5

export interface User {
    readonly id: string
    name: Name
    phoneNumber: PhoneNumber
}
export interface Book {
    readonly id: string 
    title: Title,
    author: Name,
    publishYear: Date,
    genre: Genre,
    isAvailable: isAvailable,
    borrowHistory: BorrowRecord[],
    ratings: RatingRecord[]
}

export interface BorrowRecord {
    borrow: User
    borrowDate: Date
    returnDate?: Date | null
}

export interface RatingRecord {
    user: User
    rating: Rating
    review?: string
    date: Date
}

export interface BookStats {
    totalRatings: number
    averageRating: Rating | number
    totalBorrows: number
}


//Unions for genre property
type FictionGenre =
    | "Fantasy"
    | "Science Fiction"
    | "Mystery"
    | "Romance"
    | "Thriller"
    | "Horror"
    | "Historical Fiction"
    | "Literary Fiction"
    | "Contemporary Fiction"
    | "Young Adult";

type NonFictionGenre =
    | "Biography"
    | "History"
    | "Christianity"
    | "Science"
    | "Philosophy"
    | "Self Help"
    | "Business"
    | "Technology"
    | "Politics"
    | "Travel"
    | "Cooking"

type AcademicGenre =
    | "Textbook"
    | "Research Paper"
    | "Academic Journal"
    | "Thesis"
    | "Reference";

type Other = 'Other'

