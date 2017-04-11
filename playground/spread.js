// function add(a, b) {
//     return a + b;
// }



// console.log(add(3, 1));



// var toAdd = [9, 5];


// console.log(add(...toAdd));


// var groupA = ['john', 'jimmy'];

// var groupB = ['Vikram', 'Tim'];


// var final = [...groupB, 3, ...groupA];


// console.log(final);



var personA = ['Andrew', 24];

var personB = ['Jen', 23];






function greet(name, age) {
    console.log('Hi ' + name + ', you are ' + age);

}


greet(...personA);
greet(...personB);

var names = ['Mike', 'Ben'];


var final = ['Bhavarsh', ...names];


final.forEach(function(name) {
    console.log('Hi ' + name);
})