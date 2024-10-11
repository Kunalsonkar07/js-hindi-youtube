function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // this call give this function context about this function context 
    // it helps us to add property to the this here ... 
    // it is optional to give this in first context 
    
    // if we donot pass this object property does not add 
    // SetUsername.call( username)
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);