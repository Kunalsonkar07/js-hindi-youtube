//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    // let website ;
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // ye error dega ki undefineed hai matlab variable he nahi hai 
    // par agara let website hota toh ye dekt nahi aata
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
// console.log(addTwo(5));
// ye variable abhi tak declare ye nahi hua function toh start mai ye aagaya par usska 
// varibale assign nahi hua tha

const addTwo = function(num){
    return num + 2
}
