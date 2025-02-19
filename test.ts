import { createBook, borrowBook, returnBook, addRating, getBookStats } from "./app";
import { Rating } from "./types";


// Dummy data
const exampleUser = {
    name: "John Doe",
    phoneNumber: 1234567890,
    id: 1
}
const exampleBook = createBook("Become Elisabeth Elliot", "Elisabeth Elliot", 1999, "Biography")
const exampleRatingNumber: Rating = 5
const exampleRating = { user: exampleUser, rating: exampleRatingNumber, review: 'Inspiring and thought-provoking.' };

borrowBook(exampleBook, exampleUser, new Date() as unknown as number)
returnBook(exampleBook, new Date() as unknown as number)
addRating(exampleBook, exampleRating)

console.log(exampleBook.ratings)

const exampleBookStats = getBookStats(exampleBook)
console.log(exampleBookStats)





