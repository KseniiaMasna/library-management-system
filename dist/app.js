import { nanoid } from 'nanoid';
//TODO: Rewrite this function with Omit utility and obj destructuring
const createBook = (title, author, publishYear, genre = 'Other') => {
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
const borrowBook = (book, borrower, date) => {
    !book.isAvailable ? false :
        book.isAvailable = false;
    book.borrowHistory.push({
        borrow: borrower,
        borrowDate: date,
        returnDate: null
    });
    return true;
};
const returnBook = (book, date) => {
    book.isAvailable && false;
    book.isAvailable = true;
    const currentBorrow = book.borrowHistory[book.borrowHistory.length - 1];
    currentBorrow.returnDate = date;
    return true;
};
const addRating = (book, rating) => {
    const isBookExist = true;
    !isBookExist ? false :
        book.ratings.push({
            ...rating,
            date: new Date().toISOString()
        });
    return true;
};
const getBookStats = (book) => {
    const totalRatings = book.ratings.length;
    const averageRating = totalRatings > 0
        ? book.ratings.reduce((sum, ratingRecord) => sum + ratingRecord.rating, 0) / totalRatings
        : 0;
    const totalBorrows = book.borrowHistory.length;
    return {
        totalRatings,
        averageRating,
        totalBorrows
    };
};
export { createBook, borrowBook, returnBook, addRating, getBookStats };
