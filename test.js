"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
// Dummy data
const exampleUser = {
    name: "John Doe",
    phoneNumber: 1234567890,
    id: 1
};
const exampleBook = (0, app_1.createBook)("Become Elisabeth Elliot", "Elisabeth Elliot", 1999, "Biography");
const exampleRatingNumber = 5;
const exampleRating = { user: exampleUser, rating: exampleRatingNumber, review: 'Inspiring and thought-provoking.' };
(0, app_1.borrowBook)(exampleBook, exampleUser, new Date());
(0, app_1.returnBook)(exampleBook, new Date());
(0, app_1.addRating)(exampleBook, exampleRating);
console.log(exampleBook.ratings);
const exampleBookStats = (0, app_1.getBookStats)(exampleBook);
console.log(exampleBookStats);
