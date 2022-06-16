/*All the movies in 2018 with rating > 4
Sort them by their rating
Descending order
Pick their title
*/
// ------------------------------------ONE WAY (LONG)-------------------------------------
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// Sorting only 2018 movies
movies.sort(
    function (a, b) {
        if (a.year === 2018 && b.year === 2018) {
            if (a.rating > b.rating) return -1;
            if (a.rating < b.rating) return 1;
        }
        return 0;
    }
)

// Displaying only 2018 movies title and rating > 4
for (let key in movies) {
    if (movies[key].year === 2018 && movies[key].rating > 4)
        console.log(movies[key].title);
}




// ----------------------------------- ANOTHER WAY (SHORT)-------------------------------------
const films = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

const filteredMovies = films.filter(a => a.year === 2018 && a.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .map(a => a.title)
    .reverse()

console.log(filteredMovies);