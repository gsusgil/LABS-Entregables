// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = moviesArray => moviesArray.map(moviesArray =>moviesArray.director);

const duplicateDirectors = directors => directors.filter((director, i) => directors.indexOf(director) === i);

const directors = getAllDirectors(movies)
// console.table(directors); 
// lista de directores con duplicados
const directorsNotRepeat = duplicateDirectors(directors)
// console.table (directorsNotRepeat); 
// sin duplicados

//--------------------------------

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = moviesArray => moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")).length;

// console.log(howManyMovies(movies));

//--------------------------------

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

 let scoresAverage = moviesArray => {
 let accumulate = moviesArray.reduce((finalScore, movie) => finalScore +   movie.score, 0);
 let avgScore = accumulate / moviesArray.length;
 let roundedAvg = Math.round(avgScore * 100) / 100;
 if (isNaN (roundedAvg)) {
    return 0;
    }
// else {console.log(`La puntuación media es: ${roundedAvg}`);
//  return roundedAvg
// }
 }

//--------------------------------
 
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = moviesArray => {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes ('Drama'));
    if (dramaMovies.length === 0) {
        // console.log('No hay peliculas de drama');
        // return 0;
    }    
    let accumulate = moviesArray.reduce((finalScore, movie) => finalScore +   movie.score, 0);
    let avgScore = accumulate / moviesArray.length;
    let roundedAvg = Math.round(avgScore * 100) / 100;
    // console.log((`La puntuacion promedio de las pelis de drama es: ${roundedAvg}`)); 
    // return roundedAvg;
}
// let promedioGeneral = roundedAvg.reduce((total, promedio) => total + promedio, 0) / roundedAvg.length;
// console.log(promedioGeneral);

//--------------------------------

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = moviesArray => {
    return moviesArray.sort((a,b) => {
        if (a.year !== b.year){
            return a.year - b.year;
        }
    switch (a.title.localeCompare(b.title)) {
        case -1:
          return -1;  
        case 1:
          return 1;
            default:
                return 0;}
    });
}
// console.table(orderByYear(movies));

//--------------------------------

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = moviesArray => {
    const titleArray = moviesArray.map(movie => movie.title).sort();
    return titleArray.slice ( 0, 20);
}
// console.table(orderAlphabetically(movies));



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
