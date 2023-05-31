const names=['haron','Gideon','Dan']
names.push('Isaya')
console.log(names);

// for each
names.forEach(printer);
function printer(item,index,array){
    console.log(`a[${index}]=${item}`);
}
// in arrow function
names.forEach((item,index,array)=>{
    console.log(`a[${index}]=${item}`);

})
// finding sum of numbers using foreach()
const array1=[1,2,3,4,5,6,7,8,9]
let sum=0;
array1.forEach((item,index,array)=>{
     sum+=item;
     console.log(sum);
})
console.log(`Total:${sum}`);

// how many times a letter appears in an array using forEach()
let letters=['a','b','c','a','c','b','e','d']
let count={}
letters.forEach(item=>{
    if(count[item]){
        count[item]++
    }else{
        count[item]=1
    }
})
console.log(count);

// concat() method
const str1='Hello'
const str2='World'
let greeting=str1.concat(' ',str2)
console.log(greeting);

// reverse()
let newLetters=letters.reverse();
console.log(newLetters);
console.log(letters.indexOf('d'));

// every()
let isPositive=array1.every(checker)
function checker(item){
    return item>=0
}
console.log(isPositive);

const person=[{name:'Haron'},{name:'Mburu'},{name:'Kiarii'},{uname:'Thiongo'}]
let res=person.every(item=>person.name!=undefined)
console.log(res);

