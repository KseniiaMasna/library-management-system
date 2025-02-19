// Library Management System
function createBook(title, author, publishYear, genre) {
    return {
        title: title,
        author: author,
        publishYear: publishYear,
        genre: genre,
        isAvailable: true,
        borrowHistory: [],
        ratings: []
    };
}

function borrowBook(book, borrower, date) {
    if (!book.isAvailable) {
        return false;
    }

    book.isAvailable = false;
    book.borrowHistory.push({
        borrower: borrower,
        borrowDate: date,
        returnDate: null
    });
    
    return true;
}

function returnBook(book, date) {
    if (book.isAvailable) {
        return false;
    }

    book.isAvailable = true;
    const currentBorrow = book.borrowHistory[book.borrowHistory.length - 1];
    currentBorrow.returnDate = date;
    
    return true;
}

function addRating(book, rating, review) {
    if (rating < 1 || rating > 5) {
        return false;
    }

    book.ratings.push({
        score: rating,
        review: review,
        date: new Date()
    });

    return true;
}

function getBookStats(book) {
    const totalRatings = book.ratings.length;
    const averageRating = totalRatings > 0
        ? book.ratings.reduce((sum, r) => sum + r.score, 0) / totalRatings
        : 0;
    const totalBorrows = book.borrowHistory.length;

    return {
        totalRatings,
        averageRating,
        totalBorrows
    };
}