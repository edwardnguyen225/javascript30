const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 }
];

function makeGreen () {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '3.125rem';
}

// Regular
console.log('This is regular log');

// Interpolated
console.log('%s is interpolated log', '💩');

// Styled
console.log(
  "%cI'm a log with style",
  'font-size: 4rem; background: black;color: white; text-shadow: 0.2rem 0.2rem 0 red, -0.2rem -0.2rem 0 #25F4EE;'
);

// warning!
console.warn('Warning! Warning!');

// Error :|
console.error("I'm just notifying error!");

// Info
console.info('I will log information');

// Testing
console.assert(1 === 0, 'Oops! 1 not equals to 0');

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`Dog: ${dog.name}`);
  console.log(`This dog is ${dog.name}`);
  console.log(`It's ${dog.age} dog years old`);
  console.groupEnd();
});

// counting
console.count('Me');
console.count('You');
console.count('Me');
console.count('Me');
console.count('You');
console.count('Me');
console.count('Me');
console.count('You');
console.count('Me');
console.count('You');
console.count('You');
console.count('Me');
console.count('You');

// timing
console.time('Fetching data');
fetch('https://api.github.com/users/wesbos')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('Fetching data');
    console.log(data);
  });
