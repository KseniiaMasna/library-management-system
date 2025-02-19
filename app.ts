import { FictionGenre, NonFictionGenre, AcademicGenre, Other } from "./types"

type Title = string
type Name = string
type PublishYear = number
type Genre = FictionGenre | NonFictionGenre | AcademicGenre | Other
type PhoneNumber = number
type Date = number
type isAvailable = boolean

interface User {
    name: Name
    phoneNumber: PhoneNumber
    id: number
}
interface Book {
    title: Title,
    author: Name,
    publishYear: Date,
    genre: Genre,
    isAvailable: isAvailable,
    borrowHistory: BorrowRecord[],
    ratings: RatingRecord[]
}

interface BorrowRecord {
    borrow: User
    borrowDate: Date
    returnDate?: Date | null
}

interface RatingRecord {
    user: User
    rating: 1 | 2 | 3 | 4 | 5
    review?: string
}




//Rewrite this function with Omit utility and obj destructuring
const createBook = (title: Title, author: Name, publishYear: Date, genre: Genre = 'Other'): Book => {
    return {
        title,
        author,
        publishYear,
        genre,
        isAvailable: true,
        borrowHistory: [],
        ratings: []
    };
};

const borrowBook = (book: Book, borrower: User ,date: Date): isAvailable => {
    !book.isAvailable && false
    
    book.isAvailable = false
    book.borrowHistory.push({
        borrow: borrower,
        borrowDate: date,
        returnDate: null
    })
    return true


}

const returnBook = (book: Book, date: Date): isAvailable => {
    book.isAvailable && false 

    book.isAvailable = true
                const currentBorrow = book.borrowHistory[book.borrowHistory.length - 1];
    currentBorrow.returnDate = date;
            return true
}

const addRating = (book: Book, rating : RatingRecord) => void{
    book.ratings.push(rating)
}