"use strict";

// ['Привет ты!', 'Да ты!', 'Здаровааа!!!',].forEach(alert);


// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => alert(commits[0].author.parents));




// var user = {
//     firstName: "Вася",
//     surname: "Петров"
//   }
  
//   Object.defineProperty(user, "fullName", {
//     get: function() {
//       return this.firstName + ' ' + this.surname;
//     }
//   });
  
//   alert(user.fullName); // Вася Петров

// var user = {
//     firstName: "Вася",
//     surname: "Петров",
  
//     get fullName() {
//       return this.firstName + ' ' + this.surname;
//     },
  
//     set fullName(value) {
//       var split = value.split(' ');
//       this.firstName = split[0];
//       this.surname = split[1];
//     }
//   };
  
//   alert( user.fullName ); // Вася Петров (из геттера)
  
//   user.fullName = "Петя Иванов";
//   alert( user.firstName ); // Петя  (поставил сеттер)
//   alert( user.surname ); // Иванов (поставил сеттер)
//   alert( user.fullName );



// let promise = fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
//   .then(response => response.json())
//   .then(commits => alert(commits[0]));


// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => alert(commits[0].author.login));



// async function getResponse() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/photos');
//     let content = await response.json();
//     content = content.splice (0, 10);

//     let list = document.querySelector ('.posts')


//     for (let key in content) {
//         list.innerHTML += `
//             <li class="post">
//                 <h4>${content[key].title}</h4>
//                 <img src="${content[key].url}" width="100" alt="">
//             </li>
//         `
//     }
// }
// getResponse()


// async function getResponse() {
//     let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
//     let content = await response.json();
//     console.log(content.results);
// }

// getResponse()


// fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
//   .then(res => res.json())
//   .then(content => console.log(content.results));

// // Metod 1
// str = "Hello";
// console.log (str);

// // Metod 2
// console.log ( str.slice(0, 5) );

// // Metod 3
// console.log ( str.substring(0, 5) );

// // Metod 4
// console.log ( str.substr(0, 5) );

// // Metod 5
// console.log ( 'Hello' );

// Metod 6
// let strNew = str.split (' ', 4)
// console.log ( strNew[0] )
// console.log ( strNew[1] )
// console.log ( strNew[2] )



// let srtNew;
// function splitString (n) {
//   for (let i = 0; i < n; i++) {
//     strNew += str[i]
//   }
// }
// splitString (5);

// for (let char of str) {
//   if (char === 'l') {
//     char = 'L'}
//   console.log ( char )
// }









// let obj = {
//     name: 'Andrey',
//     age: 36,
//     email: 'mybox@mail.ru',
//     telefon: '+79099638531'
// };

// obj.job = 'Freelancer in Life';

// console.log (obj["name"]);

// for (let key in obj) {
//     console.log (obj[key]);
// }

let obj = {};

obj.name = 'Andrey';
obj.age = 36;
obj.job = 'freelancer';

console.log (obj);


// for (let i = 0; i < obj.length; i++) {
//     console.log (obj(i))
// }
