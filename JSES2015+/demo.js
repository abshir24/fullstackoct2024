// let athletes = [
//   'Usain Bolt',
//   'Andre De Grasse ',
//   'Christophe Lemaitre ',
//   'Adam Gemili',
//   'Churandy Martina',
//   'LaShawn Merritt',
//   'Alonso Edward',
//   'Ramil Guliyev',
// ];

// let gold = athletes[0];
// let silver = athletes[1];
// let bronze = athletes[2];


let athletes = [

  'Usain Bolt',

  'Andre De Grasse ',

  'Christophe Lemaitre ',

  'Adam Gemili',

  'Churandy Martina',

  'LaShawn Merritt',

  'Alonso Edward',

  'Ramil Guliyev',

];

let [gold, silver, bronze] = athletes;

// console.log(gold, silver, bronze);


const user = {
  "username": "Sam",
  "email": "sam@sam.com",
  "password": "password123",
}

// let username = user['username']
// let email = user['email']
// let password = user['password']

let { password, username } = user

console.log( username,password )


