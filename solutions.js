//Problem 1:  Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

// Array of objects for people
const people = [
  { name: "Rahin", age: 25, gender: "male" },
  { name: "Mamun", age: 30, gender: "male" },
  { name: "Sumaiya", age: 35, gender: "female" },
  { name: "Selina", age: 28, gender: "female" },
  { name: "Zakir", age: 22, gender: "male" },
];

const filterAndMapNames = (people) => {
  // Remove Females
  const filteredPeople = people.filter((person) => person.gender !== "female");

  // Collect the names from remaining males
  const namesArray = filteredPeople.map((person) => person.name);

  return namesArray;
};

// Printing the final result
console.log(filterAndMapNames(people));

// Problem 2: Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

// Array of objects representing books
const books = [
  { title: "House of the Dragons", author: "Olivia Mawreen", year: 1998 },
  { title: "The Peaky Blinders", author: "Robin Pettersen", year: 2007 },
  { title: "How to Enjoy the Life", author: "Jane Austen", year: 2015 },
  { title: "Dark Life", author: "Even Thomas", year: 2021 },
];

// Function to collect only the book titles
const extractBookTitles = (books) => {
  return books.map((book) => book.title);
};

// Print the final result
console.log(extractBookTitles(books));

// Problem 3: Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

// Function to square a number
const square = (number) => {
  return number * number;
};

// Function to double a number
const double = (number) => {
  return number * 2;
};

// Function to add 5 to a number
const addFive = (number) => {
  return number + 5;
};

// Combined function that squares a number, doubles the result, and adds 5
const squareDoubleAddFive = (number) => {
  return addFive(double(square(number)));
};

// here is the result, didn't print it because there was nothing about printing in the instruction, we can print the final result by using console.log(result)
const result = squareDoubleAddFive(5);

// Problem 4: Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

// Array of objects for cars
const cars = [
  { make: "Toyota", model: "Harrier", year: 2018 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2020 },
  { make: "Audi", model: "Q8", year: 2017 },
  { make: "BMW", model: "X5", year: 2021 },
];

// Function to sort cars by the year of manufacture in ascending order
const sortCarsByYearAsc = (cars) => {
  return cars.slice().sort((car1, car2) => car1.year - car2.year);
};

// Printing the sorted array
console.log(sortCarsByYearAsc(cars));

// Problem 6: Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array

// Array of numbers
const numbers = [11, 46, 53, 94, 75, 16, 67, 8, 29, 10];

// Function to calculate sum of all even numbers using reduce
const sumOfEvenNumbers = (array) => {
  return array.reduce((acc, current) => {
    if (current % 2 === 0) {
      return acc + current;
    } else {
      return acc;
    }
  }, 0);
};

// Calculate sum of even numbers in the array, there was no instruction about printing that's why it was skipped, we can print it by only consoling the "sum" variable. 
const sum = sumOfEvenNumbers(numbers);
console.log(sum);
