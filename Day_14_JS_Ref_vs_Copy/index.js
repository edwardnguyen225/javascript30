
// start with strings, numbers and booleans
console.log('Hello there');

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:
// const team = players;
// team[3] = 'Lux';

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();
team2[3] = 'Lux2';
console.log(players, team2);

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = 'Lux3';
console.log(players, team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Lux4';
console.log(players, team4);

const team5 = Array.from(players);
team5[3] = 'Lux5';
console.log(players, team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
// const cap1 = person;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(person, cap2);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
};

console.log(wes);
const dev = Object.assign({}, wes);
console.log(dev);
const dev2 = JSON.parse(JSON.stringify(wes));
console.log(dev2);

