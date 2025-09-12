//) Optional Chaining (?.)

//👉 Safe way to access nested properties.
//If property doesn’t exist, returns undefined instead of error.



let user = {
     profile: { 
        name: "Ali" 
    }
     };

console.log(user.profile?.name); // "Ali"
console.log(user.address?.city); // undefined (no error)


//Nullish Coalescing (??)

//👉 Provides a default value only if variable is null or undefined (not 0 or "").

console.log(user.address?.city??"wah cantt"); // as here address.city not exist then i give undefined so nullish coalescing porvide value because i give value to varibale which contain undefined or null