// 1. variable
var favoriteBook = '4 hour work week';

// 2. array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'story Brand';

bookList.push('small giants');
bookList.pop();

// 3. conditionals
if(bookList[1] == 'hooked'){
    console.log('I am hooked')
}
else(
    console.log('I am bot hooked')
)

// 4. loop
// while
var i = 0; // loop variable
while( i < 15){
    console.log(i);
    console.log('Looping looping looping');
    i++;
}

// for loop
for(var i = 0; i < 15; i++){
    console.log(i)
}