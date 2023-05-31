// reverse a string
let str='HELLO'
let output=str.split('').reverse().join('');
console.log(output);

// slice
let string='HELLO, WORLD'
let string2=string.slice(2,9)
console.log(string2);

let str3=string.slice(2)
console.log(str3);

// split()
let tags="meat,pork,beef,ham,salmi,cheese,chicken"
let tagsArray=tags.split(",")
console.log(tagsArray);

// subString()
let subString=string.substring(2,9)
console.log(subString);

let str4=string.substring(2);
console.log(str4);

// subStr()
let subStr=string.substr(2,5);
console.log(subStr);
let str5=string.substr(2)
console.log(str5);

// trim()
let sentence='     Haron Mburu                 '
console.log(sentence);
let trimStr2=sentence.trim()
console.log(trimStr2);

// trimEnd()
let str6=sentence.trimEnd();
console.log(str6);

// trimStart()
let str7=sentence.trimStart();
console.log(str7);

// toLowerCase()
let string3='I am a pErson witTh aLOT of money NIgga'
let stringLower=string3.toLowerCase()
console.log(stringLower) 

// toUpperCase()
let stringUpper=string3.toUpperCase()
console.log(stringUpper) 

// charAt()
console.log(string.charAt(1))

// charCodeAt()
console.log(string.charCodeAt(1))

// concat()
console.log(str.concat(' ',string));

// endsWith()
console.log(string.endsWith('k'));
// fromCharCode()
console.log(String.fromCharCode(69))

// includes()
console.log(string.includes('L'));


