const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';

  // Regular
  console.log('Hello!');

  // Interpolated
  console.log('Hello! I am a %s!', 'nice looking string');

  // Styled
  //console.log('%c Hello! I am huuuge!', 'font-size:50px');

  // warning!
  console.warn('Dude! Watch Out!');

  // Error :|
  console.error('Dude, I did warn you.');

  // Info
  console.info('Just tell me something I don\'t know.');

  // Testing
  console.assert(1 === 2, 'Really?!');

  // clearing
  //console.clear();

  // Viewing DOM Elements
  console.log(p);
  console.dir(p);

  // Grouping together
  dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
    console.groupEnd(`${dog.name}`);
  });

  // counting
  console.count('Me!');
  console.count('Me!');
  console.count('Me!');
  console.count('Me!');
  console.count('Me!');
  console.count('Me!');
  console.count('You.');
  console.count('Me!');

  // timing
  console.time('Fetching data...');

  fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('Fetching data...');
      console.log(data);
    });
};