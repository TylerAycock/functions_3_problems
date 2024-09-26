////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

// create a function that will return the names of an array in Camel Case

const lotr = ["Frodo Baggins", "Gandalf", "Legolas Greenleaf"];

const copyArrToCamelCase = (arr) => {
  return arr.map((name) => {
    return name
      .toLowerCase()
      .split(" ")
      .map((name, i) => {
        return i == 0 ? name : name.charAt(0).toUpperCase() + name.slice(1);
      })
      .join("");
  });
};

// console.log(copyArrToCamelCase(lotr));

// create a function that will return the names of an array in Snake Case

const copyArrToSnakeCase = (arr) => {
  return arr.map((name) => {
    return name.includes(" ")
      ? name.replace(" ", "_").toLowerCase()
      : name.toLowerCase();
  });
};

// console.log(copyArrToSnakeCase(lotr));

////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////

//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ["red", "blue", "yellow", "green", "orange"];

const mappedColors = () => colors.map((color) => (color = "pink"));

// console.log(mappedColors(colors))
/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ["Bernard", "Elizabeth", "Conrad", "Mary Margaret"];

const formalGreeting = (names) => {
  return names.map((name) => `Hello ${name}`);
};

// console.log(formalGreeting(formalNames));

// Call formalGreeting passing in the formalNames array

//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = [
  "Binghampton",
  "Albany",
  "New York",
  "Ithaca",
  "Auburn",
  "Rochester",
  "Buffalo",
];

const placesThatStartWithA = (arr) =>
  arr.filter((place) => place.charAt(0) == "A");

// console.log(placesThatStartWithA(places))
/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
  { receptionist: "James" },
  { programmer: "Steve" },
  { designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE

let findJob = (arr) => {
  return arr
    .filter((obj) => {
      return obj.programmer;
    })
    .map((job) => job.programmer);
};

// call the function passing in the jobs array

// console.log(findJob(jobs));
//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290];

const productOfArray = (numbers) => {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};

// CODE HERE
// console.log(productOfArray(numsToReduce));
// call productOfArray passing in numsToReduce

/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000;

const expenses = [
  {
    title: "rent",
    amount: 1000,
  },
  {
    title: "car payment",
    amount: 250,
  },
  {
    title: "food",
    amount: 300,
  },
];

const remaining = (expenses, budget) => {
  const totalExpenses = expenses.reduce((acc, cur) => acc + cur.amount, 0);

  return budget - totalExpenses;
};

console.log(remaining(expenses, budget));
