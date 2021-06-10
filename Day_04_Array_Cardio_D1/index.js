// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log("Inventors born in the 1500's");
const before1500 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(before1500);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
console.log("Inventors first and last name only");
const fullNames = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
);
console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log("Sort oldest to youngest");
const descending = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(descending);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((sum, inventor) => {
  return (sum += inventor.passed - inventor.year);
}, 0);
console.log(`Total years: ${totalYears} (years)`);

// 5. Sort the inventors by years lived
console.log("Sort by age");
const sortByAge = inventors.sort((a, b) => {
  const lastInventorAge = a.passed - a.year;
  const nextInventorAge = b.passed - b.year;
  return lastInventorAge > nextInventorAge ? 1 : -1;
});
console.table(sortByAge);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
try {
  const category = document.querySelector(".mw-category");
  const links = [...category.querySelectorAll("a")];
  const de = links
    .map((link) => link.textContent)
    .filter((streeName) => streeName.includes("de"));
} catch (error) {
  console.log("Error in ques6: " + error);
}

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log("People sort by last name ascending");
const ascendingLastName = people.sort((lastOne, nextOne) => {
  const [lastFirst, lastLast] = lastOne.split(", ");
  const [nextFirst, nextLast] = nextOne.split(", ");
  return lastLast > nextLast ? 1 : -1;
});
console.table(people);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

console.log("Counting instances");
const countingInstances = data.reduce((tmpDict, item) => {
  if (!tmpDict[item]) {
    tmpDict[item] = 0;
  }

  tmpDict[item]++;
  return tmpDict;
}, {});
console.table(countingInstances);
