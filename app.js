"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookStats = exports.addRating = exports.returnBook = exports.borrowBook = exports.createBook = void 0;
//TODO: Rewrite this function with Omit utility and obj destructuring
const createBook = (title, author, publishYear, genre = 'Other') => {
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
exports.createBook = createBook;
const borrowBook = (book, borrower, date) => {
    !book.isAvailable && false;
    book.isAvailable = false;
    book.borrowHistory.push({
        borrow: borrower,
        borrowDate: date,
        returnDate: null
    });
    return true;
};
exports.borrowBook = borrowBook;
const returnBook = (book, date) => {
    book.isAvailable && false;
    book.isAvailable = true;
    const currentBorrow = book.borrowHistory[book.borrowHistory.length - 1];
    currentBorrow.returnDate = date;
    return true;
};
exports.returnBook = returnBook;
const addRating = (book, rating) => {
    const isBookExist = true;
    !isBookExist && false;
    book.ratings.push(Object.assign(Object.assign({}, rating), { date: new Date().toISOString() }));
    return true;
};
exports.addRating = addRating;
const getBookStats = (book) => {
    const totalRatings = book.ratings.length;
    //const allRatingsNumbers = book.ratings.map(ratingRecord => ratingRecord.rating)
    const averageRating = book.ratings.reduce((sum, ratingRecord) => sum + ratingRecord.rating, 0) / totalRatings;
    const totalBorrows = book.borrowHistory.length;
    return {
        totalRatings,
        averageRating,
        totalBorrows
    };
};
exports.getBookStats = getBookStats;
