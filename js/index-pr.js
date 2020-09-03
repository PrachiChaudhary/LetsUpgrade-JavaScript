// search 'p' in the string

var thing= "Telephone";
var pr= thing.search('p');
console.log(pr);

// converting 5 minutes to seconds

let minute= 5;
let seconds= minute*60;
console.log(seconds);

// element in an array of strings

let array1 = ['jarvis', 'tony', 'black widow'];
console.log(array1.indexOf('jarvis'));

// displaying elements containing 'a' in it

var array2 = ['nomercy', 'playzone', 'teammate'];
var first = array2[0].includes('a');
var second = array2[1].includes('a');
var third = array2[2].includes('a');

if(first)
{
    console.log(array[0]);
}
if(second)
{
    console.log(array2[1]);
}
if(third)
{
    console.log(array2[2]);
}

// array in reverse order

var array3 = ['PR', 'likes', 'js'];
var ar = array3.reverse();
console.log(ar);