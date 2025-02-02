// Question :1
// A. Write a constructor for the class Movie, which takes a String representing the title of the movie,
// a String representing the studio, and a String representing the rating as its arguments,
//  and sets the respective class properties to these values.

class Movie {
    constructor (Title,Studio,Rating) {
        this.Title = Title;
        this.Studio = Studio;
        this.Rating = Rating
    }
}

const M1 = new Movie ("ToyStory", "PixerAnimation","PG-12" );
console.log("Ans : Question A")
console.log(`Title:${M1.Title}, Studio:${M1.Studio}, Rating:${M1.Rating}`);

// --------------------------------------------------------------------------------------------------------------------------

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided ?

class Movie1 {
    constructor (Title,Studio,Rating = "PG") {
        this.Title = Title;
        this.Studio = Studio;
        this.Rating = Rating
    }
}

const M2 = new Movie1 ("InsideOut", "PixerAnimation");
console.log("Ans : Question B")
console.log(`Title:${M2.Title}, Studio:${M2.Studio}, Rating:${M2.Rating}`);
// Optional:
const m2 = new Movie1 ("InsideOut", "PixerAnimation","PG-12");
console.log(`Title:${m2.Title}, Studio:${m2.Studio}, Rating:${m2.Rating}`);

// --------------------------------------------------------------------------------------------------------------------------

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies 
// in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
// The returned array need not be full ?

class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let moviee1 = new Moviee("Thunivu", "Zee studios", "PG");
let moviee2 = new Moviee("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new Moviee("Kantara", "KRG Studios", "PG");
let movie4 = new Moviee("Vikram", "Raj kamal films", "PG-13");
let movie5 = new Moviee("veeram", "Vijaya production", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);

console.log("Ans : Question c")

for (let i = 0; i<pgMovies.length; i++){
    console.log(pgMovies[i]);
}



// --------------------------------------------------------------------------------------------------------------------------

// d) Write a piece of code that creates an instance of the class Movie with the  
// title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13” ?

class Movie4 {
    constructor (Title,Studio,Rating) {
        this.Title = Title;
        this.Studio = Studio;
        this.Rating = Rating
    }
}

const M4 = new Movie4 ("Casino Royale", "Eon Productions", "PG-13");
console.log("Ans : Question D")
console.log(`Title:${M4.Title}, Studio:${M4.Studio}, Rating:${M4.Rating}`);

// --------------------------------------------------------------------------------------------------------------------------

