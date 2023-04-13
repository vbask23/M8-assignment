//STEP 1
// let favMovies = ["The Last Mojican", "Sahara", "Shangri-la", "The Ten Commandments", "Nibiru"]
// console.log(favMovies[1])

//STEP 2
// let movies = new Array(5)
// movies[0] = "The Last Mojican"
// movies[1] = "Sahara"
// movies[2] = "Shangri-la"
// movies[3] = "The Ten Commandments"
// movies[4] = "Nibiru"
// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = "The Last Mojican"
// movies[1] = "Sahara"
// movies[2] = "Shangri-la"
// movies[3] = "The Ten Commandments"
// movies[4] = "Nibiru"
// let part1 = movies.slice(0,2)
// part1.push('Me, Myself and I') 
// movies = part1.concat(movies.splice(2,5))
// console.log(movies.length)

//STEP 4
// let movies = []
// movies[0] = "The Last Mojican"
// movies[1] = "Sahara"
// movies[2] = "Shangri-la"
// movies[3] = "The Ten Commandments"
// movies[4] = "Nibiru"
// delete movies[0]
// console.log(movies)

//STEP 5
// let movies = []
// movies[0] = "The Last Mojican"
// movies[1] = "Sahara"
// movies[2] = "Shangri-la"
// movies[3] = "The Ten Commandments"
// movies[4] = "Nibiru"
// movies[5] = "Grounding"
// movies[6] = "Me, Myself and I"
// for (let i in movies) {
//     console.log(movies[i])
//     i++
// }

//STEP 6
// let movies = []
// movies[0] = "The Last Mojican"
// movies[1] = "Sahara"
// movies[2] = "Shangri-la"
// movies[3] = "The Ten Commandments"
// movies[4] = "Nibiru"
// movies[5] = "Grounding"
// movies[6] = "Me, Myself and I"
// for(let i of movies) {
//     console.log(i)
//     i++
// }


//STEP 7
// let movies = []
// movies[0] = "The Last Mojican"
// movies[1] = "Sahara"
// movies[2] = "Shangri-la"
// movies[3] = "The Ten Commandments"
// movies[4] = "Nibiru"
// movies[5] = "Grounding"
// movies[6] = "Me, Myself and I"
// movies.sort()
// for(let i of movies) {  
//     console.log(i)
//     i++
// }

//STEP 8
// let movies = []
// movies[0] = "The Last Mojican"
// movies[1] = "Sahara"
// movies[2] = "Shangri-la"
// movies[3] = "The Ten Commandments"
// movies[4] = "Nibiru"
// movies[5] = "Grounding"
// movies[6] = "Me, Myself and I"
// movies[7] = leastFavMovies =[]
//     leastFavMovies[0] = "Saturday Night Fever"
//     leastFavMovies[1] = "A Day In The LIfe Of A Fool"
//     leastFavMovies[2] = "The Agony and the Ecstasy"
// console.log("Movies I like:\n\n")
// for(let i = 0; i <= 6; i++){
//     console.log(movies[i])
// }
// console.log("\nMovies I regret watching:\n\n")
// for(let i = 0; i <= 2; i++){
//     console.log(movies[7][i])
// }
// console.log('')

// STEP 9
// let movies = []
// movies[0] = "The Last Mojican"
// movies[1] = "Sahara"
// movies[2] = "Shangri-la"
// movies[3] = "The Ten Commandments"
// movies[4] = "Nibiru"
// movies[5] = "Grounding"
// movies[6] = "Me, Myself and I"
// movies[7] = leastFavMovies =[]
//     leastFavMovies[0] = "Saturday Night Fever"
//     leastFavMovies[1] = "A Day In The LIfe Of A Fool"
//     leastFavMovies[2] = "The Agony and the Ecstasy"
// movies = movies.slice(0,7)
// movies = movies.concat(leastFavMovies)
// console.log(movies.sort().reverse())

//STEP 11
// let movies = []
// movies[0] = "The Last Mojican"
// movies[1] = "Sahara"
// movies[2] = "Shangri-la"
// movies[3] = "The Ten Commandments"
// movies[4] = "Nibiru"
// movies[5] = "Grounding"
// movies[6] = "Me, Myself and I"
// movies[7] = leastFavMovies =[]
//     leastFavMovies[0] = "Saturday Night Fever"
//     leastFavMovies[1] = "A Day In The LIfe Of A Fool"
//     leastFavMovies[2] = "The Agony and the Ecstasy"
// console.log(movies.shift())

//STEP 12
let movies = []
movies[0] = "The Last Mojican"
movies[1] = "Sahara"
movies[2] = "Shangri-la"
movies[3] = "The Ten Commandments"
movies[4] = "Nibiru"
movies[5] = "Grounding"
movies[6] = "Me, Myself and I"
movies[7] = leastFavMovies = []
    leastFavMovies[0] = "Saturday Night Fever"
    leastFavMovies[1] = "A Day In The LIfe Of A Fool"
    leastFavMovies[2] = "The Agony and the Ecstasy"
movies[7] = (leastFavMovies[leastFavMovies.indexOf("Saturday Night Fever")] = "War of the Gods")
movies[8] = (leastFavMovies[leastFavMovies.indexOf("A Day In The LIfe Of A Fool")] = "Alien Invasion")
movies[9] = (leastFavMovies[leastFavMovies.indexOf("The Agony and the Ecstasy")] = "Sunshine")
console.log(movies)
let moviesILike = movies.map((value) => {
    if(value == leastFavMovies) {
        leastFavMovies.forEach((leastFavMovie) => {
            console.log(leastFavMovie[leastFavMovies.indexOf(leastFavMovie)] = "Maria")
            console.log(leastFavMovie[leastFavMovies.indexOf(leastFavMovie)] = "Jose")
            console.log(leastFavMovie[leastFavMovies.indexOf(leastFavMovie)] = "Pedro")

        })}})
     
//         for(let i of leastFavMovies) {
//             leastFavMovies.splice([leastFavMovies[i]], [leastFavMovies[-1]])
//     }}})
//     leastFavMovies
// console.log(moviesILike)
        // leastFavMovies.forEach((leastFavMovie) => {
        //     let movieILike = leastFavMovie

        // leastFavMovies.forEach((leastFavMovie) => {
        //     // leastFavMovie[leastFavMovies.indexOf(leastFavMovie)] 
        //     console.log(leastFavMovies.indexOf(leastFavMovie))
            


        // }) 
    
        
        // console.log(value)
    // }
// })

//STEP 13
// let movies = [["Sahara", 1], ["Shangri-la", 2], ["Nibiru", 3], ["The Ten Commandments", 4], ["The Last Mojican", 5]]
// for(let movie of movies) {
//     let movieTitles = movie.filter((item) => {
//         return typeof item === 'string'
//     })
// console.log(movieTitles)
// }

//STEP 14"
// let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"]
// const showEmployee = function(employees) {
//     console.log("Employees:\n\n")
//     for(let employee of employees) {
//         console.log(employee.toUpperCase())
//     }
//     return
// }
// showEmployee(employees)

//STEP 15 
// let sampleArray = [58, '', 'abcd', true, null, false, 0]
// const filterValues = function(array) {
//     let filterValu = array.filter((item) => {
//         return typeof item === "number" && item !== 0 || typeof item === "string" && item !== '' ||  item === true
//        })
//     console.log(filterValu) 
// }
// filterValues(sample)

//STEP 16
// let sampleArray = [ 25, 68, 94, 85, 61, 37, 62]
// const randomNum = function(array) {
//     let x = Math.floor(Math.random() * array.length) 
//     console.log(x)
//     console.log(array[x])   
// }
// randomNum(sampleArray)

//STEP 17
// let sampleArray = [25, 68, 94, 85, 61, 37, 62]
// const largestNum = function(array) {
//     for(let i = 0; i <= (array.length -1); i++) {
//         let x = Math.max(array[i])
//         if (x > array[i]) {
//             x = Math.max(array[x[i]])
//         } else {
//             x = Math.max(array[i])
//         }
//         console.log(x)
//     }
// }
// largestNum(sampleArray)

