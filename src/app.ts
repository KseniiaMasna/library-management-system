import { nanoid } from 'nanoid'
import { User, RatingRecord, BookStats, Book, Title, Name, Date, Genre, isAvailable } from "./types";


//TODO: Rewrite this function with Omit utility and obj destructuring
const createBook = (title: Title, author: Name, publishYear: Date, genre: Genre ='Other'): Book => {
    return {
        id: nanoid(),
        title,
        author,
        publishYear,
        genre: genre,
        isAvailable: true,
        borrowHistory: [],
        ratings: []
    };
};

const borrowBook = (book: Book, borrower: User ,date: Date): isAvailable => {
    !book.isAvailable ? false :
    
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
        return true;
}



const addRating = (book: Book, rating: Omit<RatingRecord, 'date'>): boolean => {
    const isBookExist = true
    !isBookExist ? false :

    book.ratings.push({
        ...rating,
        date: new Date().toISOString() as unknown as Date
    });
    return true
}

const getBookStats = (book:Book):BookStats => {
    const totalRatings = book.ratings.length    
    const averageRating = totalRatings > 0 
        ? book.ratings.reduce((sum, ratingRecord) => sum + ratingRecord.rating, 0) /totalRatings
        : 0
    const totalBorrows = book.borrowHistory.length
        
    return {
        totalRatings,
        averageRating,
        totalBorrows
    }
}

export { createBook, borrowBook, returnBook, addRating, getBookStats };


