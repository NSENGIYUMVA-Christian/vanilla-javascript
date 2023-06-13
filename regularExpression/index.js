// section one
// let word = "hello chris";
// let regex = /hello /;
// // checking id "hello" exist in word
// console.log(regex.test(word));

// matching multiple searches with 0R
// let words = "a b c d e and d";
// let regEx = /a|b|c|s /;
// console.log(regEx.test(words));

// ignoring case sensitive by adding i flag
// let words = "Chris";
// let regEx = /chris/i;
// console.log(regEx.test(words));

// extract matching word
// let words = "I like coding in javascript";
// let regEx = /coding/;
// console.log(words.match(regEx));

//looking for all repeated match, with the g flag
// let words = "Chris chris chris";
// let regEx = /chris/gi;
// console.log(words.match(regEx));

// matching with the starting or ending with .
// let words = "Chrisy chris chris";
// let regEx = /.is/;
// let res = words.match(regEx);
// console.log(res);

// matching by specific letter with []
// let words = " I like apollo";
// let regEx = /[aiuoe]/gi;
// console.log(words.match(regEx));

// matching a range of letters by [a-z]
// let letters = "I like playing basketball";
// let regEx = /[a-z]/gi;
// console.log(letters.match(regEx));

// matching letters and numbers in one regEx [a-z1-100]
// let words = "playing ball from 1 : 30 to ";
// let regeX = /[a-z1-40]|:/gi;
// console.log(words.match(regeX));
