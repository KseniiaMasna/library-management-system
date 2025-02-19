import { nanoid } from "nanoid";
import { createBook, borrowBook, returnBook, addRating, getBookStats } from "./app.js";
// Dummy data
const exampleUser = {
    name: "John Doe",
    phoneNumber: 1234567890,
    id: nanoid()
};
const exampleBook = createBook("Become Elisabeth Elliot", "Elisabeth Elliot", 1999, "Biography");
const exampleRatingNumber = 5;
const exampleRating = { user: exampleUser, rating: exampleRatingNumber, review: 'Inspiring and thought-provoking.' };
borrowBook(exampleBook, exampleUser, new Date());
returnBook(exampleBook, new Date());
addRating(exampleBook, exampleRating);
console.log(exampleBook.ratings);
const exampleBookStats = getBookStats(exampleBook);
console.log(exampleBook);
