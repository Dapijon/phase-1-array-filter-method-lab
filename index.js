// Code your solution here

const drivers = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    {name: 'bobby', hometown: 'Tampa Bay'},
  ];

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
console.log(findMatching(drivers, 'Bobby'));

function fuzzyMatch(drivers, str) {
  return drivers.filter(driver => driver.name.toLowerCase().includes(str.toLowerCase()))
}

console.log(fuzzyMatch(drivers, 'bo'));

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
