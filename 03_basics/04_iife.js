// Immediately Invoked Function Expressions (IIFE)

// nahi pata tha ye file execution ke time turant excution 
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


