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
    | "Science"
    | "Philosophy"
    | "Self Help"
    | "Business"
    | "Technology"
    | "Politics"
    | "Travel"
    | "Cooking";

type AcademicGenre =
    | "Textbook"
    | "Research Paper"
    | "Academic Journal"
    | "Thesis"
    | "Reference";

type Other = 'Other'

export {FictionGenre, NonFictionGenre, AcademicGenre, Other}